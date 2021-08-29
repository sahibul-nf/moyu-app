<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
      <div class="w-full lg:w-1/2 px-10 lg:px-0">
        <h2 class="font-normal mb-10 text-3xl text-black-font">
          Sign In to Your Account
        </h2>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Email Address</label
            >
            <input
              type="email"
              v-model="login.email"
              class="auth-form focus:outline-none bg-gray-bg focus:shadow-bg"
              placeholder="Write your email address here"
            />
          </div>
        </div>
        <div class="mb-6">
          <div class="mb-4">
            <label class="font-normal text-lg text-black-font block mb-3"
              >Password</label
            >
            <input
              @keyup.enter="userLogin"
              type="password"
              v-model="login.password"
              class="auth-form bg-gray-bg focus:outline-none focus:shadow-bg"
              placeholder="Write your password here"
            />
          </div>
        </div>
        <div class="mb-6 mt-10">
          <div class="mb-4">
            <button
              @click="userLogin"
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
              Sign In
            </button>
          </div>
        </div>
        <div class="text-center">
          <p class="text-black-font text-md">
            Don't have account?
            <nuxt-link to="/register" class="no-underline text-purple-progress"
              >Sign Up</nuxt-link
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
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        this.openNotification('Welcome', response.data.meta.message, 'success')
        this.$auth.setUser(response.data)
        this.$router.push({ path: '/' })
      } catch (error) {
        this.openNotification('Login is failed', 'Please re-check your input, and try again!', 'danger')
        console.log(error)
      }
    },
    openNotification(title, msg, color) {
      this.$vs.notification({
        // flat: true,
        position: 'top-right',
        border: color,
        title: title,
        text: msg + ' \u{1F60A}',
      })
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
