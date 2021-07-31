<template>
  <div class="landing-page">
      <section class="landing-hero pt-8">
        <!-- <div class="header__bg"></div> -->
        <div class="container mx-auto relative">
          <Navbar />
          <div class="flex items-center pt-10 px-5 md:px-0">
            <div class="w-1/2">
              <h1 class="text-4xl text-purple-progress font-medium mb-5">
                Kami siap <u class="hero-underline">membantu</u> organisasi <br/>
                untuk memulai & <u class="hero-underline">mendanai</u>
                kebutuhan mereka
              </h1>
              <p class="text-black-font text-xl font-light mb-8">
                Danai event terbaik anda agar dapat berjalan <br />
                sesuai yang harapan
              </p>
              <button
                @click="$router.push({ path: '/' })"
                class="block bg-green-button hover:bg-opacity-95 text-white font-semibold px-12 py-3 text-xl rounded-full"
              >
                Temukan Event
              </button>
            </div>
            <div class="w-1/2 flex justify-center">
              <img src="/hero-image@2x.png" alt="crowdfunding project" />
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto pt-24">
        <div class="flex justify-between items-center mb-10">
          <div class="w-auto">
            <h2 class="text-3xl text-gray-900 mb-8">
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
              <h3 class="font-medium">Sign Up</h3>
              <p class="font-light">
                Daftarkan akun Anda dan mulailah <br/> mendanai event
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <figure class="flex justify-center items-center -mt-24">
              <img src="/step-2-illustration.svg" alt="" class="h-30 mb-8" />
            </figure>
            <div class="step-content">
              <h3 class="font-medium">Open Project</h3>
              <p class="font-light">
                Pilih beberapa event menarik, <br />
                dan mulailah mendanai
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <figure class="flex justify-center items-center -mt-48">
              <img src="/step-3-illustration.svg" alt="" class="h-30 mb-8" />
            </figure>
            <div class="step-content">
              <h3 class="font-medium">Execute</h3>
              <p class="font-light">
                Saatnya buat event Anda <br />
                menjadi nyata.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto pt-24">
        <div class="flex justify-between items-center">
          <div class="w-auto">
            <h2 class="text-3xl text-gray-900 mb-8">
              Event baru yang bisa <br />
              anda support
            </h2>
          </div>
          <div class="w-auto mt-5">
            <nuxt-link class="text-gray-900 hover:underline text-md font-medium" to=""
              >View All</nuxt-link
            >
          </div>
        </div>
        <div class="flex mt-3 -mx-6">
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-1.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Robotic Hand
                </h4>
                <p class="text-md font-light text-gray-900">
                  Creating robotic hand for better movement
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
                  >
                    <div
                      style="width: 20%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>20%</div>
                  <div class="ml-auto font-semibold">Rp 100.000.000</div>
                </div>
              </div>
              <nuxt-link
                to="/projects.html"
                class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
              >
                Fund Now
              </nuxt-link>
            </div>
          </div>
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-2.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Auto Pilot Drone
                </h4>
                <p class="text-md font-light text-gray-900">
                  Self driving drone, no worry to drive again
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                  >
                    <div
                      style="width: 45%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>45%</div>
                  <div class="ml-auto font-semibold">Rp 80.000.000</div>
                </div>
                <nuxt-link
                  to="/projects.html"
                  class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                >
                  Fund Now
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-3.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Wireboard
                </h4>
                <p class="text-md font-light text-gray-900">
                  The new era of mechanical keyboard
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                  >
                    <div
                      style="width: 80%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>80%</div>
                  <div class="ml-auto font-semibold">Rp 40.000.000</div>
                </div>
                <nuxt-link
                  to="/projects.html"
                  class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                >
                  Fund Now
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-3 -mx-6">
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-4.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Wireless Earphone
                </h4>
                <p class="text-md font-light text-gray-900">
                  Just pair to phone and ready to set
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                  >
                    <div
                      style="width: 45%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>45%</div>
                  <div class="ml-auto font-semibold">Rp 55.000.000</div>
                </div>
                <nuxt-link
                  to="/projects.html"
                  class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                >
                  Fund Now
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-5.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Auto Heater
                </h4>
                <p class="text-md font-light text-gray-900">
                  Make the room keep warm automatically
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                  >
                    <div
                      style="width: 70%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>70%</div>
                  <div class="ml-auto font-semibold">Rp 75.000.000</div>
                </div>
                <nuxt-link
                  to="/projects.html"
                  class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                >
                  Fund Now
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="card-project w-1/3 mx-6 my-4 p-5 border border-gray-500 rounded-20"
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/project-thumbnail-6.jpg"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-5">
                  Smart Lock
                </h4>
                <p class="text-md font-light text-gray-900">
                  Open the door with just one tap and click
                </p>
                <div class="relative pt-4 progress-bar">
                  <div
                    class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                  >
                    <div
                      style="width: 10%"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                    ></div>
                  </div>
                </div>
                <div class="flex progress-info">
                  <div>10%</div>
                  <div class="ml-auto font-semibold">Rp 35.000.000</div>
                </div>
                <nuxt-link
                  to="/projects.html"
                  class="text-center mt-5 button-cta block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
                >
                  Fund Now
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserReview />
      <!-- <div class="cta-clip -mt-20"></div> -->
      <CallToAction />
      <Footer />
    </div>
</template>

<script>
export default {}
</script>
