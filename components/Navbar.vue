<template>
  <header class="flex items-center">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <nuxt-link class="
        text-black-font hover:text-green-button text-base px-4 py-3" to="/">
          Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-green-button text-base px-4 py-3"
          to="/project"
        >
          Projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-green-button text-base px-4 py-3"
          to="/feature"
        >
          Features</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          class="text-black-font hover:text-green-button text-base px-4 py-3"
          to="/storie"
        >
          Success Stories</nuxt-link
        >
      </li>
    </ul>
    <ul
      class="flex ml-auto items-center mt-2"
      v-if="!this.$store.state.auth.loggedIn"
    >
      <li >
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
            text-base
            rounded-full
            mr-4
          "
        >
          Sign Up
        </nuxt-link>
      </li>
      <li >
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
            text-base
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
          class="bg-gray-bg py-3 px-6 rounded-full inline-flex items-center"
        >
          <!-- border border-gray-300 -->
          <img
            v-if="this.$store.state.auth.user.data.image_url"
            :src="
              this.$axios.defaults.baseURL +
              '/' +
              this.$store.state.auth.user.data.image_url
            "
            alt=""
            class="h-8 w-8 object-cover rounded-full"
          />
          <img
            v-else
            src="/avatar.jpg"
            alt=""
            class="h-8 w-8 object-cover rounded-full"
          />
          <div class="font-normal mx-3">
            {{ this.$store.state.auth.user.data.name }}
          </div>
          <svg
            width="20"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transform rotate-180"
          >
            <path
              d="M0.11412 4.94291C0.266523 5.09563 0.513828 5.09586 0.666562 4.94348L4.72379 0.894673C4.87611 0.742368 5.12391 0.742388 5.2765 0.894966L9.33344 4.94348C9.48615 5.09588 9.73346 5.09563 9.88588 4.94291C10.0383 4.7902 10.038 4.54288 9.88531 4.39049L5.82865 0.342251C5.60012 0.113755 5.30002 -0.000463486 4.99988 -0.000463486C4.69992 -0.000463486 4.3999 0.113716 4.17166 0.341978L0.114688 4.39049C-0.0380077 4.54288 -0.0382624 4.7902 0.11412 4.94291Z"
              fill="#222222"
            />
          </svg>
        </button>
        <ul
          class="
            dropdown-menu
            absolute
            hidden
            bg-gray-bg
            w-full
            mt-1
            rounded-20
            p-4
          "
        >
          <li class="mb-2 text-black-font hover:text-green-button">
            <nuxt-link to="/dashboard">My Dashboard</nuxt-link>
          </li>
          <li class="mb-2 text-black-font hover:text-green-button">
            <nuxt-link to="/upload-avatar">My Profile</nuxt-link>
          </li>
          <li class="text-black-font hover:text-green-button">
            <div @click="userLogout" class="cursor-pointer">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
a {
  color: #223762;
}
.dropdown-menu li a:hover {
  color: #1abc9c;
}
a.nuxt-link-exact-active {
  color: #1abc9c;
  font-weight: 500;
}
</style>

<script>
export default {
  // props: ['isActive'],
  // data: () => ({
  //   active: true,
  // }),
  methods: {
    async userLogout() {
      await this.$auth
        .logout()
        .then(() => {
          this.openNotification()
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openNotification() {
      this.$vs.notification({
        // flat: true,
        position: 'top-right',
        border: 'success',
        title: "You'r logout",
        text: `Don't forget to come back \u{1F60A}`,
      })
    },
  },
}
</script>
