<template>
<div class="modal" v-if="modal">
    <div class="login">
        <img src="@/assets/modal/cancel.png" alt="close" @click="modal = !modal"/>
        <div class="login_content">
            <img class="logo" src="@/assets/logo.png" alt=“LOGO”/>
            <div class="input-text">
              <input id="account" type="text" :placeholder="$t('account')" autocomplete="off">
            </div>
            <div class="input-text">
              <input id="password" type="password" :placeholder="$t('password')" autocomplete="off">
            </div>
            <div class="btn">
              <img src="@/assets/anchor.png"/>
              <p>登入</p>
              <img src="@/assets/anchor.png"/>
            </div>
        </div>
    </div>
</div>
<div class="navbar">
  <div class="right">
    <router-link to="/" class="home_link"><img class="logo" src="@/assets/logo.png"/></router-link>
      <ul>
        <li v-for="item in tableList" :key="item"><router-link class="router-link" :to="item">{{ $t(`tabList.${item}`) }}</router-link></li>
      </ul>
  </div>
  <div class="left">
    <div class="login" @click="modal = !modal">
      <img src="@/assets/login.png"/>
      <p>{{ $t('login') }}</p>
    </div>
    <div class="langSelector" ref="langSelect">
      <div class="btn" ref="main" @click="isShow = !isShow" @click.stop>
        <img src="@/assets/lang.png">
        <p>{{ $t('lang') }}</p>
      </div>
      <div class="list" :class="{on: isShow == true}">
        <ul>
          <li v-for="item in langMenu" :key="item.id" @click="$i18n.locale = item.id,isShow = !isShow" @click.stop>{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import { reactive, ref, watch } from 'vue'
export default ({
  name: 'NavBar',
  component: {},
  mounted () {
    document.addEventListener('click', (e) => {
      if (!this.$refs.langSelect.contains(e.target)) this.isShow = false
    })
  },
  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
    const isShow = ref(false)
    const modal = ref(false)
    const tableList = reactive(['what', 'about', 'verify'])
    const langMenu = reactive([
      { name: '繁體中文', id: 'zh-TW' },
      { name: 'English', id: 'en-US' },
      { name: '簡體中文', id: 'zh-CN' },
      { name: '日本語', id: 'ja-JP' }
    ])
    // reload page時不會變回預設
    watch(locale, (newlocale) => {
      localStorage.setItem('locale', newlocale)
    })
    return { isShow, modal, langMenu, locale, t, tableList }
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
  z-index: 20;
  .login {
    display: flex;
    justify-content: normal;
    align-items: normal;
    flex-direction: column;
    width: 90%;
    max-width: 440px;
    height: 465px;
    border-radius: 20px;
    border: 2px solid $sky_blue;
    background: $black-80;
    img {
      margin: 10px 10px 0 auto;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    .login_content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      img {
        margin: 0;
        padding: 0;
        margin-bottom: 35px;
        width: 235px;
        height: 51px;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        color: #747474;
        box-sizing: border-box;
      }
      .input-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        padding: 5px 10px;
        width: 290px;
        border: 1px solid #535353;
        border-radius: 5px;
        background: $black;
        input {
          padding: 1px 2px;
          font-size: 16px;
          font-weight: 400;
          width: 100%;
          height: 28px;
          color: $orange;
          border: none;
          border-radius: 5px;
          background: $black;
          outline: none;
        }
      }
      .btn {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 30px 0 25px;
        width: 160px;
        height: 42px;
        border: 1px solid $sky_blue;
        border-radius: 50px;
        background: $black-80;
        cursor: pointer;
        img {
          margin-top: 30px;
          width: 25px;
          height: 21px;
        }
        img:first-child {
          transform: rotate(180deg);
        }
        p {
          text-align: center;
          margin-bottom: 0;
          width: auto;
          font-size: 20px;
          font-weight: 900;
          color: $white;
          text-shadow: 0 0 0.2em $sky_blue;
        }
      }
    }
  }
}
.navbar {
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  width: 100%;
  height: 100px;
  background-color: $black-70;
  box-shadow: 0 5px 5px $box_shadow;
  box-sizing: border-box;
  z-index: 10;
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
      justify-content: normal;
      align-items: normal;
      white-space: nowrap;
      width: 40vw;
      li {
        display: inline;
        justify-content: normal;
        align-items: normal;
        position: relative;
        margin:0 25px;
        a {
          color: $white;
          &.router-link-exact-active:after  {
            color: $sky_blue;
          }
          &.router-link-exact-active:before  {
            border-bottom: 2px solid $orange;
          }
        }
      }
    }
    .router-link::before {
      content: "";
      position: absolute;
      width: 30px;
      bottom: -8px;
      border-bottom: 2px solid $white;
    }
    .router-link::after {
      content:"★";
      position: absolute;
      top: -12px;
      width: 30px;
      font-size: 12px;
      font-weight: 400;
      color: $white;
    }
  }
  .left {
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 20vw;
    box-sizing: border-box;
    .login {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 15px;
      margin-right: 30px;
      width: 7.5vw;
      height: 2vw;
      border: 1px solid $orange;
      background: $black;
      cursor: pointer;
      img {
        width: 18px;
        height: 18px;
      }
      p {
        margin-left: 0.5vw;
        color: $orange;
        font-weight: 500;
        white-space: nowrap;
      }
    }
    .langSelector {
      display: flex;
      position: relative;
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
      .list {
        position: absolute;
        margin-left: 5px;
        top: 50px;
        width: 132px;
        height: 0;
        z-index: 5;
        transition: height 0.5s ease 0s;
        overflow: hidden;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          border: 1px solid $orange;
          background: $black;
          transition: margin-top 0.5;
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
      .on {
        height: 176px;
      }
    }
  }
}
</style>
