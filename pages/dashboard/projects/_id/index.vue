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
          <h2 class="text-3xl text-black-font mb-6 font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
          <h3 class="text-xl text-black-font">Campaign Details</h3>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            :to="{
              name: 'dashboard-projects-id-edit',
              params: { id: campaign.id },
            }"
            class="
              bg-purple-progress
              hover:bg-green-button
              text-white
              font-bold
              px-8
              py-2
              rounded-full
              inline-flex
              items-center
            "
          >
            Edit
          </nuxt-link>
        </div>
      </div>
      <div class="block mb-2 mt-4">
        <div class="w-full lg:max-w-full lg:flex">
          <div
            class="
              border-2 border-gray-300
              bg-white
              rounded-2xl
              p-8
              flex flex-col
              justify-between
              leading-normal
              w-full
            "
          >
            <div>
              <div class="text-black-font font-semibold text-2xl mb-2">
                {{ campaign.name }}
              </div>
              <p
                class="text-sm font-bold text-black-font flex items-center mb-1"
              >
                Description
              </p>
              <p class="text-gray-700 text-base">
                {{ campaign.description }}
              </p>
              <p
                class="
                  text-sm
                  font-bold
                  text-black-font
                  flex
                  items-center
                  mb-1
                  mt-4
                "
              >
                What Will Funders Get
              </p>
              <ul
                class="list-disc ml-5 text-black-font"
                v-for="perk in campaign.perks"
                :key="perk.id"
              >
                <li>{{ perk }}</li>
              </ul>
              <p
                class="
                  text-sm
                  font-bold
                  text-black-font
                  flex
                  items-center
                  mb-1
                  mt-4
                "
              >
                Price
              </p>
              <p class="text-4xl text-gray-700">
                {{ new Intl.NumberFormat().format(campaign.goal_amount) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-10">
        <div class="w-1/4 mr-6">
          <h3 class="text-xl text-black-font">Gallery</h3>
        </div>
        <div class="flex w-3/4 text-right items-center justify-end">
          <input
            type="file"
            ref="file"
            accept="image/*"
            class="mr-4 border border-gray-300 rounded-md"
            @change="onFileChange"
            style="display: none"
          />
          <div
            class="border-2 border-gray-bg pr-8 pl-4 py-1 -mr-6 rounded-full"
          >
            {{ this.image }}
          </div>
          <button
            @click="$refs.file.click()"
            class="
              bg-gray-bg
              hover:bg-green-button hover:text-white
              text-black-font
              font-normal
              px-6
              py-2
              rounded-full
              mr-4
            "
          >
            Choose Image
          </button>
          <button
            @click="upload"
            class="
              bg-purple-progress
              hover:bg-green-button
              text-white
              font-bold
              px-6
              py-2
              rounded-full
              inline-flex
              items-center
            "
          >
            Upload
          </button>
        </div>
      </div>
      <div class="mt-2" v-if="campaign.images.length > 0">
        <VueSlickCarousel v-bind="settings">
          <div v-for="image in campaign.images" :key="image.image_url">
            <div
              class="
                relative
                bg-white
                m-2
                p-2
                rounded-20
                h-44
                border-2 border-gray-300
                hover:shadow-bg
              "
            >
              <!-- w-1/4 -->
              <figure class="item-thumbnail h-full">
                <img
                  :src="$axios.defaults.baseURL + '/' + image.image_url"
                  @click="
                    changeMainImage(
                      $axios.defaults.baseURL + '/' + image.image_url
                    )
                  "
                  alt=""
                  class="rounded-20 w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </VueSlickCarousel>
      </div>

      <div class="flex justify-between items-center mt-12">
        <h3 class="text-xl text-black-font">Transaction History</h3>
      </div>

      <div class="block mt-4">
        <p class="text-gray-400 mb-3">
          Total Transaction : {{ campaignTransactions.length }}
        </p>
        <div
          class="w-full lg:max-w-full lg:flex"
          v-for="campaignTransaction in campaignTransactions"
          :key="campaignTransaction.id"
        >
          <div
            class="
              w-full
              border border-gray-300
              bg-white
              rounded-2xl
              p-8
              flex flex-col
              justify-between
              leading-normal
              mb-2
            "
          >
            <div class="text-black-font font-semibold text-xl mb-1">
              {{ campaignTransaction.name }}
            </div>
            <p class="text-sm text-gray-600 flex items-center">
              Rp
              {{ new Intl.NumberFormat().format(campaignTransaction.amount) }}
              <br />
              {{ new Date(Date.parse(campaignTransaction.created_at)) }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="pt-64 pb-10">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const resC = await $axios.$get('/api/v1/campaigns/' + params.id)
    const resT = await $axios.$get(
      '/api/v1/campaigns/' + params.id + '/transactions'
    )
    const campaign = resC.data
    const campaignTransactions = resT.data
    return { campaign, campaignTransactions }
  },
  data: () => ({
    settings: {
      infinite: false,
      dots: true,
      dotsClass: 'slick-dots custom-dot-class',
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    },
    selectedFiles: undefined,
    image: '. . .',
  }),
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      if (file == undefined) {
        ;(this.selectedFiles = undefined), (this.image = '. . .')
      } else {
        this.selectedFiles = this.$refs.file.files
        this.image = this.selectedFiles[0].name
      }
    },
    async loadCampaign() {
      const resC = await this.$axios.get(
        '/api/v1/campaigns/' + this.$route.params.id
      )
      const campaign = resC.data.data
      this.campaign = campaign
    },
    async upload() {
      let formData = new FormData()
      formData.append('campaign_id', this.$route.params.id)
      formData.append('is_primary', true)
      formData.append('file', this.selectedFiles.item(0))

      try {
        const response = await this.$axios.post(
          '/api/v1/campaign-images',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        this.openNotification('Yeayy...', response.data.meta.message, 'success')

        this.loadCampaign()
        this.selectedFiles = undefined
        this.image = '. . .'
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
