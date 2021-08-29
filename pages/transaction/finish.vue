<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <!-- <img src="/funded-illustration.svg" alt="" class="h-72 w-full" /> -->
        <RocketSuccess />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">Yeay! You are super</h2>
      <p class="text-center font-light">
        Your money has ben transferred
        <br />
        into organizer account
      </p>
      <div class="mb-4 mt-6">
        <div class="mb-3">
          <button
            @click="$router.push({ path: '/' })"
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
            @click="$router.push({ path: '/dashboard' })"
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
            My Dashboard
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
