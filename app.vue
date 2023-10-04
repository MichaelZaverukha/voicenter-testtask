<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  methods: {
    scrollToTop() {
      VueScrollTo.scrollTo('#top')
    }
  }
}
</script>

