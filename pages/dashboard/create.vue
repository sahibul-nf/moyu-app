<template>
  <div class="project-page">
    <section class="pt-8">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="container mx-auto pt-16">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-4xl text-gray-900 font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <div class="w-3/4 mr-6">
          <h3 class="text-2xl text-gray-900">Create New Projects</h3>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
            to="/dashboard/detail"
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
            Save
          </nuxt-link>
        </div>
      </div>
      <div class="block mt-4">
        <div class="w-full lg:max-w-full lg:flex">
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
            "
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/2 px-3 md:mb-0">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-black-font text-sm
                      font-bold
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
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-black-font text-sm
                      font-bold
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
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-black-font text-sm
                      font-bold
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
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-black-font text-sm
                      font-bold
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
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="
                      block
                      uppercase
                      tracking-wide
                      text-black-font text-sm
                      font-bold
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
