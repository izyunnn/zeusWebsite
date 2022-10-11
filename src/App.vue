<template>
<NavBar />
<router-view />
</template>
<script>
import NavBar from '@/views/components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar },
  setup () {}
}
</script>
<style lang="scss">
*{
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
