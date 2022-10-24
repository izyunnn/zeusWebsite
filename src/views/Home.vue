<template>
  <div class="home">
    <div class="home_banner">
      <img v-if="(device !== 'mobile')" src="@/assets/homepage/homepage.png" alt="banner"/>
      <img v-else src="@/assets/homepage/mobile.png" alt="banner" />
    </div>
    <div class="home_black"></div>
    <div class="home_game"><GameItem/></div>
  </div>
</template>

<script>
import GameItem from './components/GameItem.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
export default {
  name: 'HomePage',
  components: { GameItem },
  setup () {
    const { device } = storeToRefs(useAppStore())
    return { device }
  }
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
  width: 100%;
}
.home_game{
  padding: 6.2vw 0;
  height: 142.6vw;
  background-image: url("@/assets/homepage/content2.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.home_black {
    height: 99vw;
    background-image: url("@/assets/homepage/mobile2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}
@media (min-width: 768px) {
  .home {
    .home_black {
      height: 54vw;
      background-image: unset;
    }
  }
}
</style>
