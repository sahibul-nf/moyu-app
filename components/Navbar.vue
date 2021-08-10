<template>
  <header class="flex items-center">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <nuxt-link
          class="
            text-black-font
            hover:text-teal-500
            text-lg
            px-4
            py-3
            font-medium
          "
          to="/"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-teal-500 text-lg px-4 py-3"
          to="/projects/1"
          >Project</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-teal-500 text-lg px-4 py-3"
          to="/features.html"
          >Features</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-teal-500 text-lg px-4 py-3"
          to="/story.html"
          >Success Stories</nuxt-link
        >
      </li>
    </ul>
    <ul
      class="flex ml-auto items-center mt-2"
      v-if="!this.$store.state.auth.user"
    >
      <li>
        <nuxt-link
          to="/register"
          class="
            inline-block
            bg-transparent
            border-gray-bg border-4
            hover:bg-green-button hover:text-white
            text-black-font
            w-40
            text-center
            px-6
            py-2
            text-lg
            rounded-full
            mr-4
          "
        >
          Sign Up
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/login"
          class="
            inline-block
            bg-gray-bg
            border-gray-bg border-4
            hover:bg-green-button hover:text-white
            text-black-font
            w-40
            text-center
            px-6
            py-2
            text-lg
            rounded-full
          "
        >
          My Account
        </nuxt-link>
      </li>
    </ul>
    <div class="flex ml-auto" v-else>
      <div class="dropdown inline-block relative z-10">
        <button
          class="
            bg-gray-bg
            py-4
            px-8
            rounded-20
            border border-gray-300
            inline-flex
            items-center
          "
        >
          <img
            v-if="$store.state.auth.user.image_url"
            :src="
              $axios.defaults.baseURL + '/' + $store.state.auth.user.image_url
            "
            alt=""
            class="h-8 rounded-full"
          />
          <img v-else src="/avatar.jpg" alt="" class="h-8 rounded-full" />
          <div class="font-normal ml-3">{{ $store.state.auth.user.name }}</div>
        </button>
        <ul class="dropdown-menu absolute hidden bg-black-font shadow w-full">
          <li>
            <nuxt-link to="/dashboard">My Dashboard</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
