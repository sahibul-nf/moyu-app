<template>
  <div class="project-page">
    <section class="pt-8">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="containerX mx-auto pt-16">
      <div class="flex justify-between items-center mb-8">
        <div class="w-3/4 mr-6">
          <h2 class="text-3xl text-black-font mb-2 font-medium">Dashboard</h2>
          <ul class="flex mt-4">
            <li class="mr-6">
              <nuxt-link class="text-black-font font-semibold" to="#">
                Your Projects
              </nuxt-link>
            </li>
            <li class="mr-6">
              <nuxt-link
                class="text-gray-300 hover:text-black-font"
                to="/dashboard/transactions"
              >
                Your Transactions
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            to="/dashboard/projects/create"
            class="
              bg-purple-progress
              hover:bg-green-button
              text-white
              font-bold
              py-3
              px-6
              rounded-full
              inline-flex
              items-center
            "
          >
            Create Campaign
          </nuxt-link>
        </div>
      </div>
      <div class="block mb-2">
        <!-- v-if="campaigns.data > 0" -->
        <div
          class="h-60 w-full lg:max-w-full lg:flex mb-4"
          v-for="campaign in campaigns"
          :key="campaign.id"
        >
          <img
            class="
              lg:h-auto lg:w-52
              flex-none
              object-cover
              rounded-l-20
              text-center
              overflow-hidden
            "
            :src="$axios.defaults.baseURL + '/' + campaign.image_url"
            alt="Campaign Image"
            v-if="campaign.image_url !== ''"
          />
          <div
            v-else
            class="
              rounded-l-20
              lg:w-52
              h-auto
              bg-gray-bg
              text-gray-400
              flex-none
            "
          >
            <!-- border-2 border-gray-300 -->
            <div class="flex items-center justify-center h-full">
              <div class="text-xl">No Image</div>
            </div>
          </div>
          <div
            class="
              w-full
              border-r-2 border-t-2 border-b-2 border-gray-300
              bg-white
              rounded-r-20
              p-8
              flex flex-col
              justify-between
              leading-normal
            "
          >
            <div class="mb-8">
              <div class="text-black-font font-semibold text-xl mb-2">
                {{ campaign.name }}
              </div>
                  <!-- font-light -->
              <p
                class="
                  text-sm
                  text-black-font
                  flex
                  items-center
                  mb-2
                "
              >
                Rp. {{ new Intl.NumberFormat().format(campaign.goal_amount) }} &middot;
                {{
                  (
                    (campaign.current_amount / campaign.goal_amount) *
                    100
                  ).toFixed(2)
                }}%
              </p>
              <p class="text-gray-700 text-base">
                {{ campaign.short_description }}
              </p>
            </div>
            <div class="flex items-center">
              <button
                @click="
                  $router.push({
                    name: 'dashboard-projects-id',
                    params: { id: campaign.id },
                  })
                "
                class="bg-green-button hover:bg-opacity-95 hover:shadow-bg text-white text-base py-2 px-6 rounded-full"
              >
                See Detail
              </button>
            </div>
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
  async asyncData({ $axios, app }) {
    const res = await $axios.$get(
      '/api/v1/campaigns?user_id=' + app.$auth.user.data.id
    )
    const campaigns = res.data
    return { campaigns }
  },
}
</script>
