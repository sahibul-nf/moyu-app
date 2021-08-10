<template>
  <div class="h-screen flex justify-center items-center">
    <div class="auth-background"></div>
    <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
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
              v-model="register.fullName"
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
            />
          </div>
        </div>
        <div class="mb-6 mt-10">
          <div class="mb-4">
            <button
              @click="$router.push({ path: '/upload' })"
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
        fullName: '',
        occupation: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.auth-background {
  background-image: url('/step-1-illustration.svg');
  background-position: center;
  background-size: cover;
}
</style>
