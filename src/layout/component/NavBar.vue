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
      <ul v-if="(device !== 'mobile')">
        <li v-for="item in tableList" :key="item"><router-link class="router-link" :to="item">{{ $t(`tabList.${item}`) }}</router-link></li>
      </ul>
  </div>
  <div class="left">
    <div class="login" @click="modal = !modal">
      <img src="@/assets/login.png"/>
      <p>{{ $t('login') }}</p>
    </div>
    <div class="langSelector" ref="lang">
      <div class="btn" v-if="(device !== 'mobile')" @click="isShow = !isShow" @click.stop>
        <img src="@/assets/lang.png">
        <p>{{ $t('lang') }}</p>
      </div>
      <div class="menu" v-else @click="isShow = !isShow">
        <img src="@/assets/menu.png">
        <div class="list2" :class="{on: isShow == true}">
          <ul>
            <li v-for="item in tableList" :key="item"><router-link :to="item" @click="isShow == false">{{ $t(`tabList.${item}`) }}</router-link></li>
          </ul>
          <ul>
            <div class="title">選擇語系</div>
            <li v-for="item in langMenu" :key="item.id" @click="$i18n.locale = item.id,isShow = !isShow" @click.stop>{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="list" :class="{on: isShow == true}" v-if="(device !== 'mobile')">
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
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
export default ({
  name: 'NavBar',
  component: {},
  mounted () {
    document.addEventListener('click', (e) => {
      if (!this.$refs.lang.contains(e.target)) this.isShow = false
    })
  },
  setup () {
    const { locale, t } = useI18n({ useScope: 'global' })
    const { device } = storeToRefs(useAppStore())
    const isShow = ref(false)
    const modal = ref(false)
    // const lang = ref()
    const tableList = reactive(['what', 'about', 'verify'])
    const langMenu = reactive([
      { name: '繁體中文', id: 'zh-TW' },
      { name: 'English', id: 'en-US' },
      { name: '簡體中文', id: 'zh-CN' },
      { name: '日本語', id: 'ja-JP' }
    ])
    /* const langSelect = () => {
      isShow.value = !isShow.value
    }
    onMounted(() => {
      document.addEventListener('click', langSelect)
    })
    onUnmounted(() => {
      document.removeEventListener('click', langSelect)
    })
    */
    // reload page時不會變回預設語言
    watch(locale, (newlocale) => {
      localStorage.setItem('locale', newlocale)
    })
    return { isShow, modal, langMenu, locale, t, tableList, device }
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
  width: 100%;
  height: 60px;
  background-color: $black-70;
  box-shadow: 0 5px 5px $box_shadow;
  box-sizing: border-box;
  z-index: 10;
  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
      margin-left: 10px;
      width: 36.3vw;
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
    margin-left: 6vw;
    box-sizing: border-box;
    .login {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 10px;
      width: 100px;
      height: 40px;
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
      .menu {
        margin-left: 30px;
        width: 45px;
        cursor: pointer;
        .list2 {
          position: absolute;
          top: 60px;
          right: 0;
          width: 255px;
          height: 0;
          background: $black-80;
          transition: max-height .5s;
          z-index: 5;
          overflow: hidden;
          ul {
            padding: 15px 25px 0;
            .title {
              margin-bottom: 15px;
              padding-bottom: 15px;
              color: $white;
              border-bottom: 1px solid $white;
              font-size: 3.696vw;
              font-weight: 700;
            }
            li {
              margin-bottom: 15px;
              color: $orange;
              font-size: 3.7vw;
              font-weight: 700;
              a {
                margin-bottom: 15px;
                color: $orange;
                font-size: 3.7vw;
                font-weight: 700;
              }
            }
          }
          ul:last-child {
            padding-bottom: 10px;
          }
        }
        .on {
          height: 300px;
        }
      }
      .list {
        position: absolute;
        margin-left: 5px;
        top: 50px;
        width: 132px;
        height: 0;
        z-index: 10;
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
@media (min-width: 1024px) {
  .navbar {
    padding: 0 5.15vw;
    height: 100px;
    .right {
      .logo {
        width: 275px;
      }
    }
    .left {
      margin-left: 20vw;
      .login {
        margin-right: 30px;
      }
    }
  }
}
@media (min-width: 768) {
  .navbar {
    height: 100px;
  }
}
</style>
