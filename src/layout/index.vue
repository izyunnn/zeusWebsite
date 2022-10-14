<template>
  <div class="layout">
    <navBar />
    <appMain />
    <bottom />
  </div>
</template>

<script>
import appMain from './component/AppMain.vue'
import navBar from './component/NavBar.vue'
import bottom from './component/Bottom.vue'
export default {
  name: 'LayOut',
  components: {
    appMain,
    navBar,
    bottom
  },
  setup () {}
}
</script>

<style lang="scss" scoped>
</style>
