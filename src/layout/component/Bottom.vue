<template>
<div class="bottom">
  <a href="https://access.gaminglabs.com/Certificate/Index?i=385" target="blank"><img src="@/assets/bottomlogo.gif"/></a>
  <p>All contents © copyright 2020 zeus Worldwide . All rights reserved.</p>
  <div class="bottom_anchor" v-if="(device !== 'mobile')" @click="goTop()"><img src="@/assets/anchor.png"></div>
</div>
</template>
<script>
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
export default {
  name: 'bottomView',
  components: {},
  setup () {
    const { device } = storeToRefs(useAppStore())
    function goTop () {
      document.documentElement.scrollTop = 0
    }
    return { goTop, device }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
  text-align: center;
  margin-top: -9vw;
  height: 27vw;
  max-width: 100%;
  min-height: 32vh;
  background-image: url(@/assets/bottom.png);
  background-size: cover;
  background-position: center;
  z-index: 0;
  img {
    width: 41.84vw;
  }
  p {
    margin-top: 3vw;
    padding: 2vw 0;
    color: $white;
    font-size: 18px;
    font-weight: 500;
  }
  .bottom_anchor {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 3.86vw;
    right: 3.86vw;
    width: 5vw;
    height: 5vw;
    border: 1px solid $sky_blue;
    cursor: pointer;
    img {
      width: 2.5vw;
      transform: rotate(-90deg);
    }
  }
}
@media (min-width: 768px) {
  .bottom {
    img {
      width: 16.3vw;
    }
  }
}
</style>
