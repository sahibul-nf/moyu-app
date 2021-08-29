<template>
  <div class="project-page">
    <section class="pt-8">
      <div class="container mx-auto relative">
        <Navbar />
      </div>
    </section>
    <section class="containerX mx-auto pt-16">
      <div class="flex justify-between items-center mb-8">
        <div class="w-3/4 mr-6">
          <h2 class="text-3xl text-black-font mb-2 font-medium">Dashboard</h2>
          <ul class="flex mt-4">
            <li class="mr-6">
              <nuxt-link
                class="text-gray-300 hover:text-black-font"
                to="/dashboard/"
              >
                Your Projects
              </nuxt-link>
            </li>
            <li class="mr-6">
              <nuxt-link
                class="text-black-font font-semibold"
                to="/dashboard/transactions"
              >
                Your Transactions
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block mb-2">
        <p class="text-gray-400 mb-3">
          Total Transaction : {{ transactions.length }}
        </p>
        <div
          class="h-40 w-full lg:max-w-full lg:flex mb-4"
          v-for="transaction in transactions"
          :key="transaction.id"
        >
          <img
            class="
              lg:h-auto lg:w-52
              flex-none
              object-cover
              rounded-l-20
              text-center
              overflow-hidden
            "
            :src="
              $axios.defaults.baseURL + '/' + transaction.campaign.image_url
            "
            alt="transaction Image"
            v-if="transaction.campaign.image_url !== ''"
          />
          <div
            v-else
            class="
              rounded-l-20
              lg:w-52
              h-auto
              bg-gray-bg
              text-gray-400
              flex-none
            "
          >
            <div class="flex items-center justify-center h-full">
              <div class="text-xl">No Image</div>
            </div>
          </div>
          <div
            class="
              w-full
              border-r-2 border-t-2 border-b-2 border-gray-300
              bg-white
              rounded-r-20
              p-8
              flex flex-col
              justify-center
              leading-normal
            "
          >
            <!-- <div class="mb-8"> -->
              <div class="text-black-font font-semibold text-xl mb-2">
                {{ transaction.campaign.name }}
              </div>
              <p class="text-sm text-black-font flex items-center mb-2">
                Rp
                {{ new Intl.NumberFormat().format(transaction.amount + " ") }}
                <br/>
                {{ " " + new Date(Date.parse(transaction.created_at)) }}
              </p>
              <p class="text-black-font text-sm capitalize">
                Status :
                {{ transaction.status }}
              </p>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </section>
    <div class="pt-64 pb-10">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    const res = await $axios.$get('/api/v1/transactions')
    const transactions = res.data
    return { transactions }
  },
}
</script>
