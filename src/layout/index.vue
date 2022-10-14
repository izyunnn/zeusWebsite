<template>
  <div class="layout">
    <NavBar />
    <AppMain />
    <Bottom />
  </div>
</template>

<script>
import AppMain from './component/AppMain.vue'
import NavBar from './component/NavBar.vue'
import Bottom from './component/Bottom.vue'
export default {
  name: 'LayOut',
  components: {
    AppMain,
    NavBar,
    Bottom
  },
  setup () {}
}
</script>

<style lang="scss" scoped>
</style>
