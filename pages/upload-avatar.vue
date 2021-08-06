<template>
    <div class="auth-page">
      <div class="container mx-auto h-screen flex justify-center items-center">
        <div class="w-full lg:w-1/3 px-10 lg:px-0">
          <div class="flex justify-center items-center mx-auto mb-4 w-40">
            <div class="relative">
                <img
                  src="/avatar.jpg"
                  alt=""
                  class="rounded-full border-white border-4"
                />
              <nuxt-link to="/upload-filled">
                <img
                  src="/icon-avatar-add.svg"
                  alt=""
                  class="absolute right-0 bottom-0 pb-2"
                />
              </nuxt-link>
            </div>
          </div>
          <h2 class="font-normal mb-3 text-3xl text-black-font text-center">
            Hi, Julia
          </h2>
          <p class="text-black-font text-center font-light">
            Please upload your selfie
          </p>
          <div class="mb-4 mt-10">
            <div class="mb-3">
              <button
                @click="$router.push({ path: '/register-success' })"
                class="block w-full bg-purple-progress hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
              >
                Sign Up Now
              </button>
            </div>
          </div>
          <div>
            <div class="mb-4">
              <button
                @click="$router.push({ path: '/register-success' })"
                class="block w-full bg-gray-bg border-white border hover:bg-green-button hover:text-white text-black-font font-normal px-6 py-4 text-lg rounded-full"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>