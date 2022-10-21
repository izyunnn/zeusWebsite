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
  width: 100%;
  height: 100%;
  background-image: url("@/assets/homepage/content1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
}
.home_banner {
  max-width: 100%;
  min-height: 110vh;
  background-image: url("@/assets/homepage/homepage.png");
  background-size: cover;
}
.home_game{
  padding: 6.2vw 0;
  height: 65vw;
  background-image: url("@/assets/homepage/content2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.home_black {
  max-width: 100%;
  min-height: 100vh;
}
</style>
