<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto">
        <!-- <img src="/funded-illustration.svg" alt="" class="w-full" /> -->
        <CoffeeError />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">
        Your transaction unfinish
      </h2>
      <p class="text-center font-light">Your transaction is cancelled. <br> Let's try again</p>
      <div class="mb-4 mt-6">
        <div class="mb-3">
          <button
            @click="$router.push({ path: '/project' })"
            class="
              block
              w-full
              bg-purple-progress
              hover:bg-green-button
              text-white
              font-semibold
              px-6
              py-4
              text-lg
              rounded-full
            "
          >
            Fund Other Project
          </button>
        </div>
        <div class="mb-4">
          <button
            @click="$router.push({ path: '/' })"
            class="
              block
              w-full
              bg-gray-bg
              text-black-font
              hover:bg-green-button hover:text-white
              font-normal
              px-6
              py-4
              text-lg
              rounded-full
            "
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'success',
}
</script>
