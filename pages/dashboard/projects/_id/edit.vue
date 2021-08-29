<template>
  <div class="project-page">
    <section class="pt-8">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="containerX mx-auto pt-16">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-3xl text-black-font font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <div class="w-3/4 mr-6">
          <h3 class="text-xl text-black-font">
            Edit Campaign "{{ campaign.name }}"
          </h3>
        </div>
        <div class="w-1/4 text-right">
          <button
            @click="updateCampaign"
            class="
              bg-purple-progress
              hover:bg-green-button
              text-white
              font-semibold
              px-8
              py-2
              rounded-full
              inline-flex
              items-center
            "
          >
            Update
          </button>
        </div>
      </div>
      <div class="block mt-4">
        <div class="w-full lg:max-w-full lg:flex">
          <div
            class="
              w-full
              border border-gray-300
              bg-white
              rounded-20
              p-8
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 md:mb-0">
                  <label
                    class="
                      block
                      capitalize
                      tracking-wide
                      text-black-font text-sm
                      font-semibold
                      mb-2
                    "
                  >
                    Campaign Name
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-bg
                      text-black-font text-sm
                      border border-gray-bg
                      rounded-full
                      py-3
                      px-4
                      leading-tight
                      outline-none
                      focus:shadow-outline
                    "
                    type="text"
                    placeholder="Contoh: Cari sponsor untuk Moyu"
                    v-model="campaign.name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      capitalize
                      tracking-wide
                      text-black-font text-sm
                      font-semibold
                      mb-2
                    "
                  >
                    Price
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-bg
                      text-black-font text-sm
                      border border-gray-bg
                      rounded-full
                      py-3
                      px-4
                      mb-2
                      leading-tight
                      outline-none
                      focus:shadow-outline
                    "
                    type="number"
                    placeholder="Contoh: 200000"
                    v-model.number="campaign.goal_amount"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      capitalize
                      tracking-wide
                      text-black-font text-sm
                      font-semibold
                      mb-2
                      mt-3
                    "
                  >
                    Short Description
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-bg
                      text-black-font text-sm
                      border border-gray-bg
                      rounded-full
                      py-3
                      px-4
                      mb-4
                      leading-tight
                      outline-none
                      focus:shadow-outline
                    "
                    type="text"
                    placeholder="Deskripsi singkat mengenai projectmu"
                    v-model="campaign.short_description"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      capitalize
                      tracking-wide
                      text-black-font text-sm
                      font-semibold
                      mb-2
                    "
                  >
                    What will backers get
                  </label>
                  <input
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-bg
                      text-black-font text-sm
                      border border-gray-bg
                      rounded-full
                      py-3
                      px-4
                      mb-4
                      leading-tight
                      outline-none
                      focus:shadow-outline
                    "
                    type="text"
                    placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                    v-model="campaign.perks"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      capitalize
                      tracking-wide
                      text-black-font text-sm
                      font-semibold
                      mb-2
                    "
                  >
                    Description
                  </label>
                  <textarea
                    class="
                      appearance-none
                      block
                      w-full
                      bg-gray-bg
                      text-black-font text-sm
                      border border-gray-bg
                      rounded-2xl
                      py-3
                      px-4
                      mb-4
                      leading-tight
                      outline-none
                      focus:shadow-outline
                    "
                    type="text"
                    placeholder="Isi deskripsi panjang untuk projectmu"
                    v-model="campaign.description"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-64 mb-10">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const resC = await $axios.$get('/api/v1/campaigns/' + params.id)
    const campaign = resC.data
    return { campaign }
  },
  methods: {
    async updateCampaign() {
      try {
        const response = await this.$axios.$put(
          '/api/v1/campaigns/' + this.$route.params.id,
          {
            name: this.campaign.name,
            short_description: this.campaign.short_description,
            description: this.campaign.description,
            goal_amount: this.campaign.goal_amount,
            perks: this.campaign.perks,
          }
        )
        this.openNotification(
          'Yeayy...',
          response.meta.message,
          'success'
        )
        this.$router.push({
          name: 'dashboard-projects-id',
          params: { id: response.data.ID },
        })
      } catch (error) {
        this.openNotification('Opps...', error, 'danger')
        console.log(error)
      }
    },
    openNotification(title, msg, color) {
      this.$vs.notification({
        // flat: true,
        position: 'top-right',
        border: color,
        title: title,
        text: msg + ' 🚀',
      })
    },
  },
}
</script>
