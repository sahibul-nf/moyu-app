<template>
  <div class="flex justify-center items-center">
    <div class="auth-background"></div>
    <div class="w-auto py-5 md:w-2/4 lg:w-2/3 flex justify-center items-center">
      <div class="w-full lg:w-1/2 px-10 lg:px-0">
        <h2 class="font-normal mb-10 text-3xl text-black-font">
          Sign Up Account
        </h2>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Full Name</label
            >
            <input
              type="text"
              class="auth-form bg-gray-bg focus:outline-none focus:shadow-bg"
              placeholder="Write Your Name Here"
              v-model="register.name"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Occupation</label
            >
            <input
              type="text"
              class="auth-form bg-gray-bg focus:outline-none focus:shadow-bg"
              placeholder="Write your occupation here"
              v-model="register.occupation"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Email Address</label
            >
            <input
              type="email"
              class="auth-form bg-gray-bg focus:outline-none focus:shadow-bg"
              placeholder="Write your email address here"
              v-model="register.email"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Password</label
            >
            <input
              type="password"
              class="auth-form bg-gray-bg focus:outline-none focus:shadow-bg"
              placeholder="Type your password here"
              v-model="register.password"
              @keyup.enter="userRegister"
            />
          </div>
        </div>
        <div class="mb-6 mt-10">
          <div class="mb-4">
            <button
              @click="userRegister"
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
              Continue Sign Up
            </button>
          </div>
        </div>
        <div class="text-center">
          <p class="text-black-font text-md">
            Already have account?
            <nuxt-link to="/login" class="no-underline text-purple-progress"
              >Sign In</nuxt-link
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      register: {
        name: '',
        occupation: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userRegister() {
      try {
        let response = await this.$axios.post('/api/v1/users', this.register)
        console.log(response.data.data.token)
        this.$auth
          .setUserToken(response.data.data.token)
          .then(() => this.$router.push({ path: '/upload-avatar' }))
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.auth-background {
  background-image: url('/step-1-illustration.svg');
  background-position: center;
  background-size: cover;
}
</style>
