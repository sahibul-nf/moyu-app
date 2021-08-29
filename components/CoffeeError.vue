<template>
  <client-only>
    <lottie-player :src="animation" :options="options" />
  </client-only>
</template>

<script>
import animation from '~/static/Coffee.json'

export default {
  data: () => ({
    animation,
    options: {
      autoplay: true,
      loop: true,
      width: '300px',
    }
  }),
}
</script>
