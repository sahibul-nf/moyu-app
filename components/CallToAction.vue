<template>
  <section class="bg-white pt-60 pb-40">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <h1 class="text-5xl text-purple-progress font-semibold">
          Cara mudah untuk mendanai
          <br />
          event dan inovasi terbaik
        </h1>
        <button
          @click="$router.push({ path: '/register' })"
          class="
            inline-block
            bg-green-button
            hover:bg-opacity-95
            text-white
            font-semibold
            px-8
            py-3
            mt-8
            text-lg
            rounded-full
          "
        >
          Mulai
        </button>
      </div>
    </div>
  </section>
</template>
