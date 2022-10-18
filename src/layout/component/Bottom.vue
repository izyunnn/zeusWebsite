<template>
<div class="bottom">
  <a href="https://access.gaminglabs.com/Certificate/Index?i=385" target="blank"><img src="@/assets/bottomlogo.gif"/></a>
  <p>All contents © copyright 2020 zeus Worldwide . All rights reserved.</p>
  <div class="bottom_anchor" @click="goTop()"><img src="@/assets/anchor.png"></div>
</div>
</template>
<script>
export default {
  name: 'bottomView',
  components: {},
  setup () {
    function goTop () {
      document.documentElement.scrollTop = 0
    }
    return { goTop }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.bottom {
    margin-top: -9vw;
    height: 27vw;
    background-image: url(@/assets/bottom.png);
    min-height: 32vh;
    max-width: 100%;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
      img {
        width: 16.3vw;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        margin-top: 3vw;
        padding: 2vw 0;
        color: $white;
      }
      .bottom_anchor {
        top: 3.86vw;
        right: 3.86vw;
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border: 1px solid $sky_blue;
        cursor: pointer;
        img {
          width: 2.5vw;
          transform: rotate(-90deg);
        }
      }
    }
</style>
