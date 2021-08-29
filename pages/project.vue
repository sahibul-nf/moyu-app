<template>
  <div class="pt-8">
    <div class="container mx-auto">
      <Navbar isActive="true" />
    </div>
    <section id="projects" class="transition containerX mx-auto pt-24">
      <div class="flex items-center justify-center mb-16">
        <div class="w-auto">
          <h2
            class="text-4xl text-purple-progress font-semibold mb-8 text-center"
          >
            Event baru yang bisa <br />
            anda support
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div
          v-for="campaign in campaigns.data"
          :key="campaign.id"
          class="
            card-project
            w-full
            p-5
            border-2
            hover:border-4
            border-gray-300
            hover:border-gray-bg
            rounded-20
          "
        >
          <div class="item">
            <figure class="item-image">
              <img
                v-if="campaign.image_url !== ''"
                :src="$axios.defaults.baseURL + '/' + campaign.image_url"
                alt=""
                class="rounded-20 w-full h-52 object-cover"
              />
              <div
                v-else
                class="
                  rounded-20
                  w-full
                  h-52
                  bg-gray-bg
                  text-gray-300
                  flex
                  items-center
                  justify-center
                "
              >
                <div class="text-2xl">No Image</div>
              </div>
            </figure>
            <div class="item-meta">
              <h4 class="truncate text-2xl font-medium text-gray-900 mt-5 mb-2">
                {{ campaign.name }}
              </h4>
              <p class="text-md font-light text-gray-900 h-12">
                {{ campaign.short_description }}
              </p>
              <div class="relative pt-4 progress-bar">
                <div
                  class="
                    overflow-hidden
                    h-2
                    mb-4
                    text-xs
                    flex
                    rounded
                    bg-gray-200
                  "
                >
                  <div
                    :style="
                      'width:' +
                      (campaign.current_amount / campaign.goal_amount) * 100 +
                      '%'
                    "
                    class="
                      shadow-none
                      flex flex-col
                      text-center
                      whitespace-nowrap
                      text-white
                      justify-center
                      bg-purple-progress
                      progress-striped
                    "
                  ></div>
                </div>
              </div>
              <div class="flex progress-info">
                <div>
                  {{
                    (
                      (campaign.current_amount / campaign.goal_amount) *
                      100
                    ).toFixed(2)
                  }}%
                </div>
                <div class="ml-auto font-semibold">
                  Rp {{ new Intl.NumberFormat().format(campaign.goal_amount) }}
                </div>
              </div>
            </div>
            <button
              @click="
                $router.push({
                  name: 'projects-id',
                  params: { id: campaign.id },
                })
              "
              class="
                text-center
                mt-5
                button-cta
                block
                w-full
                bg-purple-progress
                hover:bg-green-button
                text-white
                font-semibold
                px-6
                py-3
                text-lg
                rounded-full
              "
            >
              Fund Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <UserReview />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const campaigns = await $axios.$get('/api/v1/campaigns')
    return { campaigns }
  },
}
</script>
