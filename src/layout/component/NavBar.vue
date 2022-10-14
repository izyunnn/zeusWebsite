<template>
<div class="navbar">
  <div class="right">
    <a href="/#home" class="home_link"><img class="logo" src="@/assets/logo.png" @click="linkSelect(-1)"/></a>
      <ul>
        <li v-for="(item, index) in tableList" :key="index" @click="linkSelect(index)" :class="{ actived:index == isActive }"><a :href="item.title">{{ item.name }}</a></li>
      </ul>
  </div>
  <div class="left">
    <div class="login">
      <img src="@/assets/login.png"/>
      <p>登入</p>
    </div>
    <div class="langSelector">
      <div class="btn" @click="isShow = !isShow">
        <img src="@/assets/lang.png">
        <p>繁體中文</p>
      </div>
      <div class="list_on" v-if="isShow">
        <ul>
          <li>English</li>
          <li>简体中文</li>
          <li>繁體中文</li>
          <li>日本語</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default ({
  name: 'NavBar',
  component: {},
  setup () {
    const isActive = ref(0)
    const store = useStore()
    const isShow = ref(false)
    const tableList = computed(() => store.state.tableList.tablelist)
    const linkSelect = (index) => {
      isActive.value = index
    }
    return { tableList, linkSelect, isActive, isShow }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
  .navbar {
    padding: 0 5.15625vw;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    box-shadow: 0 5px 5px $box_shadow;
    background-color: $black-70;
    height: 100px;
    width: 100%;
    .right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .home_link {
        width: 275px;
        height: 60px;
        .logo{
        width: 275px;
        height: 60px;
        }
      }
      ul {
        display: flex;
        white-space:nowrap;
        li {
          margin:0 30px;
          position: relative;
          a {
            list-style-type: none;
            color: $white;
            text-decoration: none;
          }
        }
      }
      li::before {
        content: "";
        position: absolute;
        bottom: -8px;
        width: 30px;
        border-bottom: 2px solid $white;
      }
      li::after {
        content:"★";
        position: absolute;
        top: -12px;
        width: 30px;
        font-size: 12px;
        font-weight: 400;
        color: $white;
      }
      .actived::after {
        color: $sky_blue;
      }
      .actived::before {
        border-bottom: 2px solid $orange;
      }
    }
    .left {
        margin-left: 42.5em;
        text-align: center;
        align-items: center;
        display: flex;
        .login {
          text-align: center;
          align-items: center;
          display: flex;
          padding: 15px;
          margin-right: 30px;
          width: 100px;
          height: 40px;
          border: 1px solid $orange;
          background: $black;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
          p {
            color: $orange;
            margin-left: 10px;
            font-weight: 500;
            white-space:nowrap;
          }
        }
        .langSelector {
          position: relative;
          display: flex;
          .btn{
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            width: 100px;
            height: 40px;
            z-index: 10;
            cursor: pointer;
            img {
              width: 20px;
              height: 20px;
            }
            p {
              color: $orange;
            }
          }
          .list_on {
            height: 176px;
            position: absolute;
            margin-left: 5px;
            top: 50px;
            width: 132px;
            z-index: 5;
            transition: margin-top 0.5s;
            overflow: hidden;
            ul {
              flex-direction: column;
              height: 100%;
              border: 1px solid $orange;
              background: $black;
              transition: margin-top .5s;
              display: flex;
              justify-content: center;
              align-items: center;
              list-style: none;
              li {
                padding: 10px 0;
                width: 100%;
                height: 36px;
                color: $white;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;
              }
              li.active {
                color: $orange;
              }
            }
          }
        }
      }
}
</style>
