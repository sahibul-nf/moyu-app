<template>
  <div class="project-page">
      <section class="pt-8">
        <div class="container mx-auto relative">
          <Navbar />
        </div>
      </section>
      <section class="container mx-auto pt-16">
        <div class="flex justify-between items-center mb-8">
          <div class="w-3/4 mr-6">
            <h2 class="text-4xl text-black-font mb-2 font-medium">Dashboard</h2>
            <ul class="flex mt-4">
              <li class="mr-6">
                <nuxt-link class="text-black-font font-bold" to="#"> Your Projects </nuxt-link>
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
              to="/dashboard/create"
              class="bg-purple-progress hover:bg-green-button text-white font-bold py-4 px-6 rounded-full inline-flex items-center"
            >
              + Create Campaign
            </nuxt-link>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-l-20 text-center overflow-hidden"
              style="
                background-image: url('https://tailwindcss.com/img/card-left.jpg');
              "
            ></div>
            <div
              class="w-full border-2 border-gray-300 bg-white rounded-r-20 p-8 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-1">
                  Cari Sponsor untuk Moyu
                </div>
                <p class="text-sm font-light text-black-font flex items-center mb-2">
                  Rp. 200.000.000 &middot; 80%
                </p>
                <p class="text-gray-700 text-base">
                  With N-key rollover (NKRO on wired mode only) you can register
                  as many keys as you can press at once without missing out
                  characters. It allows to use all the same media keys as
                  conventional macOS.
                </p>
              </div>
              <div class="flex items-center">
                <nuxt-link
                  to="/dashboard/detail"
                  class="bg-green-button text-white py-2 px-5 rounded-full"
                >
                  Detail
                </nuxt-link>
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