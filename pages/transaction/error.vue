<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <!-- <img src="/404-illustration.svg" alt="" class="w-full" /> -->
        <AstronotError />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">
        Oops! something wrong
      </h2>
      <p class="text-center font-light">
        An error occured when your transaction. <br />
        Please try again later!
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
            Fund another Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
}
</script>
