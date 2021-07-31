<template>
  <header class="flex items-center">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <nuxt-link
          class="text-black-font hover:text-teal-500 text-lg px-4 py-3 font-medium"
          to="/"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-teal-500 text-lg px-4 py-3"
          to="/projects.html"
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
    <ul class="flex ml-auto items-center mt-2">
      <li>
        <nuxt-link
          to="/register.html"
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
          to="/login.html"
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
  </header>
</template>