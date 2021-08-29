<template>
  <div class="auth-page">
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-full lg:w-1/3 px-10 lg:px-0">
        <div class="flex justify-center items-center mx-auto mb-5 w-40">
          <div class="relative">
            <img
              :src="url"
              alt=""
              class="h-32 w-32 object-cover rounded-full border-white border-4"
            />
            <div class="cursor-pointer" @click="$refs.file.click()">
              <img
                src="/icon-avatar-add.svg"
                alt=""
                class="absolute right-0 bottom-0 mb-2 shadow-bg rounded-full"
              />
              <input
                type="file"
                ref="file"
                accept="image/*"
                style="display: none"
                @change="onFileChange"
              />
            </div>
          </div>
        </div>
        <h2 class="font-normal mb-3 text-3xl text-black-font text-center">
          Hi, {{ this.$store.state.auth.user.data.name }}
        </h2>
        <p class="text-black-font text-center font-light text-lg">
          Please upload your selfie
        </p>
        <div class="mb-4 mt-10">
          <div class="mb-3">
            <button
              @click="upload"
              :disabled="selectedFiles == undefined"
              :class="
                selectedFiles == undefined
                  ? 'cursor-not-allowed hover:bg-purple-progress'
                  : ''
              "
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
              Sign Up Now
            </button>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <button
              @click="$router.push({ path: '/register-success' })"
              class="
                block
                w-full
                bg-gray-bg
                border-white border
                hover:bg-green-button hover:text-white
                text-black-font
                font-normal
                px-6
                py-4
                text-lg
                rounded-full
              "
            >
              Skip
            </button>
          </div>
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
      url: '/avatar.jpg',
      selectedFiles: undefined,
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      if (file == undefined) {
        this.url = '/avatar.jpg'
        this.selectedFiles = undefined
      } else {
        this.url = URL.createObjectURL(file)
        this.selectedFiles = this.$refs.file.files
      }
    },
    async upload() {
      let formData = new FormData()
      formData.append('avatar', this.selectedFiles.item(0))

      try {
        await this.$axios.post('/api/v1/avatars', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.$router.push({ path: '/register-success' })
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    if (this.$store.state.auth.loggedIn) {
      const avatar = this.$store.state.auth.user.data.image_url
      if (avatar != '') {
        this.url = this.$axios.defaults.baseURL + '/' + avatar
        this.selectedFiles = ''
      }
    }
  },
}
</script>
