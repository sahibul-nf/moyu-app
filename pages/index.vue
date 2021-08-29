<template>
  <div class="landing-page">
    <section class="landing-hero pt-8">
      <div class="container mx-auto">
        <Navbar />
      </div>
      <div class="containerX mx-auto relative">
        <div class="flex items-center pt-10 px-5 md:px-0">
          <div class="w-1/2">
            <h1 class="text-4xl text-purple-progress font-medium mb-5">
              Kami siap <u class="hero-underline">membantu</u> organisasi <br />
              untuk memulai & <u class="hero-underline">mendanai</u>
              kebutuhan mereka
            </h1>
            <p class="text-black-font text-lg font-light mb-8">
              <!-- Danai event terbaik anda agar dapat berjalan <br />
              sesuai harapan -->
              Buat project/event terbaik anda menjadi nyata dengan <br />
              mendapatkan support dari para backer terbaik
            </p>
            <button
              @click="$router.push({ path: '#projects' })"
              class="
                block
                bg-green-button
                hover:bg-opacity-95
                text-white
                font-semibold
                px-12
                py-3
                text-xl
                rounded-full
                transition
              "
            >
              Get Started
            </button>
          </div>
          <div class="w-1/2 flex justify-center">
            <img src="/hero-image@2x.png" alt="crowdfunding project" />
          </div>
        </div>
      </div>
    </section>
    <section class="containerX mx-auto pt-24">
      <div class="flex justify-between items-center mb-10">
        <div class="w-auto">
          <h2 class="text-3xl text-black-font font-medium mb-8">
            Hanya butuh 3 langkah untuk <br />
            menjalankan event keren Anda!
          </h2>
        </div>
      </div>
      <div class="flex">
        <div class="w-full px-56 mb-5">
          <img src="/line-step.svg" alt="" class="w-full" />
        </div>
      </div>
      <div class="flex justify-between items-center text-center">
        <div class="w-1/3">
          <figure class="flex justify-center items-center">
            <img src="/step-1-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium text-lg mb-2">Sign Up</h3>
            <p class="font-light">
              Daftarkan akun Anda dan mulailah <br />
              mendapatkan sponsor
            </p>
          </div>
        </div>
        <div class="w-1/3">
          <figure class="flex justify-center items-center -mt-24">
            <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium text-lg mb-2">Open Project</h3>
            <p class="font-light">
              Kampanye kan event Anda semenarik
              <br />
              mungkin, dan mulailah <br />
              mendapatkan hasil
            </p>
          </div>
        </div>
        <div class="w-1/3">
          <figure class="flex justify-center items-center -mt-48">
            <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
          </figure>
          <div class="step-content">
            <h3 class="font-medium text-lg mb-2">Execute</h3>
            <p class="font-light">
              Saatnya buat event Anda <br />
              menjadi nyata.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="transition containerX mx-auto pt-24">
      <div class="flex justify-between items-center">
        <div class="w-auto">
          <h2 class="text-3xl text-black-font font-medium mb-8">
            Event baru yang bisa <br />
            anda support
          </h2>
        </div>
        <div class="w-auto mt-5">
          <nuxt-link
            class="text-gray-900 hover:underline text-md font-medium"
            to="/project"
            >View All</nuxt-link
          >
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 mt-3">
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
  openNotification() {
    this.$vs.notification({
      // flat: true,
      position: 'top-right',
      border: 'success',
      title: 'title',
      text: 'msg' + ' \u{1F60A}',
    })
  },
}
</script>
