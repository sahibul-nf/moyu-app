<template>
  <div class="project-page">
    <section class="project-header pt-8">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="containerX mx-auto -mt-56 mb-10">
      <div class="flex mt-3">
        <div class="w-3/4 mr-6">
          <div
            class="
              bg-white
              p-3
              mb-3
              border-4 border-gray-bg
              shadow-bg
              rounded-20
            "
          >
            <figure class="item-image">
              <img
                :src="this.main_image"
                alt=""
                class="rounded-20 w-full object-cover"
                style="height: 500px"
                v-if="this.main_image !== ''"
              />
              <div
                v-else
                class="
                  rounded-20
                  w-full
                  bg-gray-bg
                  text-gray-300
                  flex
                  items-center
                  justify-center
                "
                style="height: 500px"
              >
                <div class="text-2xl">No Image</div>
              </div>
            </figure>
          </div>
          <div class="mb-10" v-if="campaign.images.length > 0">
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
        </div>
        <div class="w-1/4">
          <div
            class="
              bg-white
              w-full
              p-5
              border-4
              shadow-bg
              border-gray-bg
              rounded-20
              sticky
            "
            style="top: 15px"
          >
            <h3>Project Leader:</h3>

            <div class="flex mt-5 items-center justify-center">
              <div class="w-1/4 flex-grow-0">
                <img
                  :src="
                    $axios.defaults.baseURL + '/' + campaign.user.avatar_url
                  "
                  class="w-14 inline-block rounded-full h-14 object-cover"
                  v-if="campaign.user.avatar_url !== ''"
                  onerror="this.onerror=null; this.src='/avatar.jpg';"
                />
                <img
                  src="/avatar.jpg"
                  alt=""
                  class="w-14 inline-block rounded-full h-14 object-cover"
                  v-else
                />
              </div>
              <div class="w-4"></div>
              <div class="w-9/12 flex-grow">
                <div
                  class="font-semibold text-xl text-black-font truncate"
                  v-if="campaign.user.name !== ''"
                >
                  {{ campaign.user.name }}
                </div>
                <div class="font-semibold text-xl text-black-font" v-else>
                  No name
                </div>

                <div class="font-normal text-md text-gray-400 opacity-80">
                  {{ campaign.backer_count }} backer
                </div>
              </div>
            </div>

            <h4 class="mt-5 font-semibold">What will you get:</h4>
            <ul
              class="list-check mt-3"
              v-for="perk in campaign.perks"
              :key="perk.id"
            >
              <li>{{ perk }}</li>
            </ul>
            <div class="mt-8" v-if="this.$store.state.auth.loggedIn">
              <input
                type="number"
                class="
                  border border-gray-300
                  block
                  w-full
                  px-6
                  py-3
                  rounded-full
                  text-gray-800
                  transition
                  duration-300
                  ease-in-out
                  focus:outline-none focus:shadow-outline
                "
                placeholder="Amount in Rp"
                v-model.number="transaction.amount"
                @keyup.enter="fund"
              />
              <button
                @click="fund"
                class="
                  text-center
                  mt-3
                  button-cta
                  block
                  w-full
                  bg-purple-progress
                  hover:bg-green-button
                  text-white
                  font-medium
                  px-6
                  py-3
                  text-md
                  rounded-full
                "
              >
                Fund Now
              </button>
            </div>
            <div class="mt-8" v-else>
              <nuxt-link
                to="/login"
                class="
                  text-center
                  mt-3
                  button-cta
                  block
                  w-full
                  bg-purple-progress
                  hover:bg-green-button
                  text-white
                  font-medium
                  px-6
                  py-3
                  text-md
                  rounded-full
                "
              >
                Sign In Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="containerX mx-auto">
      <div class="flex justify-between items-center">
        <div class="w-full md:w-3/4 mr-6">
          <h2 class="text-3xl text-black-font mb-2 font-medium">
            {{ campaign.name }}
          </h2>
          <p class="font-light text-lg mb-8">
            {{ campaign.short_description }}
          </p>

          <div class="relative progress-bar">
            <div
              class="
                overflow-hidden
                mb-4
                text-xs
                flex
                rounded-full
                bg-gray-200
                h-5
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
          <div class="flex progress-info mb-10 text-black-font">
            <div class="text-2xl">
              {{
                (
                  (campaign.current_amount / campaign.goal_amount) *
                  100
                ).toFixed(2)
              }}%
            </div>
            <div class="ml-auto font-semibold text-2xl">
              Rp {{ new Intl.NumberFormat().format(campaign.goal_amount) }}
            </div>
          </div>
          <h4 class="text-xl text-black-font mb-2 font-medium">
            Description
          </h4>
          <p class="font-light text-lg mb-5">
            {{ campaign.description }}
          </p>
        </div>
        <div class="w-1/4 hidden md:block"></div>
      </div>
    </section>
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const res = await $axios.$get('/api/v1/campaigns/' + params.id)
    const campaign = res.data
    return { campaign }
  },
  data() {
    return {
      main_image: '',
      avatar: '/avatart.jpg',
      settings: {
        infinite: false,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      transaction: {
        amount: Number,
        campaign_id: Number.parseInt(this.$route.params.id),
      },
    }
  },
  methods: {
    changeMainImage(url) {
      this.main_image = url
    },
    async fund() {
      try {
        const res = await this.$axios.post(
          '/api/v1/transactions',
          this.transaction
        )
        console.log(res)
        this.openLoading()
        window.location = res.data.data.payment_url
      } catch (error) {
        this.openNotification('Funding is failed', 'Fill in your amount!', 'danger')
        console.log(error)
      }
    },
    openLoading() {
      const loading = this.$vs.loading(
        {text: 'Wait the moment ...', color: '#fff'}
      )
      setTimeout(() => {
        loading.close()
      }, 5000)
    },
    openNotification(title, msg, color) {
      this.$vs.notification({
        // flat: true,
        position: 'top-right',
        border: color,
        title: title,
        text: msg + ' \u{1F60A}',
      })
    },
  },
  mounted() {
    if (this.campaign.images.length > 0) {
      this.main_image =
        this.$axios.defaults.baseURL + '/' + this.campaign.image_url
    }
  },
}
</script>
