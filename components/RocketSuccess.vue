<template>
  <client-only>
    <lottie-player :src="animation" :options="options" />
  </client-only>
</template>

<script>
import animation from '~/static/growth-animation.json'

export default {
  data: () => ({
    animation,
    options: {
      autoplay: true,
      loop: true,
      width: '450px',
    }
  }),
}
</script>
