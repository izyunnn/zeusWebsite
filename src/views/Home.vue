<template>
  <div class="home">
    <div class="home_banner"></div>
    <div class="home_black"></div>
    <div class="home_game"><GameItem/></div>
  </div>
</template>

<script>
import GameItem from './components/GameItem.vue'
export default {
  name: 'HomePage',
  components: { GameItem },
  setup () {}
}
</script>
<style lang="scss" scoped>
  .home {
    background-image: url("@/assets/homepage/content1.png");
    height: 100%;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .home_banner {
    background-image: url("@/assets/homepage/homepage.png");
    min-height: 110vh;
    max-width: 100%;
    background-size: cover;
  }
  .home_black {
    min-height: 100vh;
    max-width: 100%;
  }
</style>
