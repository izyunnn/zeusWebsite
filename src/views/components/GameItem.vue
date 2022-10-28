<template>
<div class="modal" v-if="modal">
    <div class="gameDetail">
        <img class= "cancel" src="@/assets/modal/cancel.png" @click="modal = !modal"/>
        <div class="gameDetail_content">
            <img class= "gamePic" :src="require(`@/assets/games/${name}.png`)" alt=“icon”/>
            <div class="info">
                <p class="title">{{ $t(`gameList.${name}_title`) }}</p>
                <span>{{ $t(`gameList.${name}_content`) }}</span>
                <span>{{ $t(`gameList.${name}_intro`) }}</span>
                <div class="btn">
                    <img src="@/assets/anchor.png"/>
                    <p class="play">PLAY</p>
                    <img src="@/assets/anchor.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal-2" v-if="modal2">
    <div class="login">
        <img src="@/assets/modal/cancel.png" alt="close" @click="modal2 = !modal2"/>
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
<div class="container">
  <div class="title" data-before="GAME ITEMS" data-after="宙斯區塊鏈遊戲"></div>
  <ul>
    <li v-for="item in imgs.slice(0,n)" :key="item" >
      <div class="col-6">
        <img :src="require(`@/assets/games/${item}.png`)" alt=“icon”/>
      </div>
      <div class="col-6">
        <div class="title">{{ $t(`gameList.${item}_title`) }}</div>
        <div class="content">{{ $t(`gameList.${item}_content`) }}</div>
        <div class="btns">
            <img src="@/assets/games/search.png" @click="setModal(item),modal = !modal"/>
            <img src="@/assets/games/searchGame.png" @click="modal2 = !modal2"/>
        </div>
      </div>
    </li>
  </ul>
  <div class="btn" @click.once="loadMore = !loadMore">
    <p>MORE GAMES</p>
    <img src="@/assets/anchor.png"/>
  </div>
</div>
</template>
<script>
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
export default {
  name: 'GameItem',
  components: {},
  setup () {
    const { device } = storeToRefs(useAppStore())
    const loadMore = ref(false)
    const modal = ref(false)
    const modal2 = ref(false)
    const name = ref('')
    const n = computed(() => {
      if (device.value !== 'mobile') {
        if (loadMore.value === true) {
          return 9
        }
        return 6
      } else if (loadMore.value === true) {
        return 9
      }
      return 3
    })
    const imgs = reactive(['baccarat', 'dragon_tiger', 'xoc_dia', 'hoo_hey_now', 'teen_patti', 'ander_bahar', 'btc_quickWin', 'Pk10', 'fan_tan'])
    const setModal = (data) => {
      name.value = data
    }
    return { modal, modal2, n, setModal, loadMore, imgs, name }
  }
}
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
  background-color: $modal;
  z-index: 20;
  .gameDetail {
    display: flex;
    justify-content: normal;
    align-items: normal;
    flex-direction: column;
    padding: 0 15px;
    width: 90%;
    max-width: 400px;
    min-height: 465px;
    border-radius: 20px;
    border: 2px solid $sky_blue;
    background: $black-80;
    .cancel {
      margin: 10px 10px 0 auto;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    .gameDetail_content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .gamePic {
        width: 80%;
        margin-bottom: 35px;
      }
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          width: 100%;
          color: $white;
        }
        span {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 20px;
          color: $white;
        }
        .btn {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10px;
          width: 160px;
          height: 42px;
          border: 1px solid $sky_blue;
          border-radius: 50px;
          background: $black-50;
          cursor: pointer;
        }
        img:first-child {
          transform: rotate(180deg);
        }
        img {
          margin: 0;
          height: 25px;
          width: 25px;
        }
        .play {
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
.modal-2 {
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
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    height: 100%;
    .title {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    ul {
      width: 68.6vw;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            height: 33vw;
            width: 68.6vw;
            border: 2px solid $sky_blue;
            border-radius: 2.6vw;
            border-left: none;
            background: $black-50;
            .col-6:first-child {
                flex: 0 0 90px;
            }
            .col-6:last-child {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
                padding: 2.6vw;
            }
            .col-6 {
                img {
                height: 33vw;
                width: 33vw;
                border: 2px solid $sky_blue;
                border-radius: 1vw;
                }
                .title {
                font-size: 1vw;
                font-weight: 700;
                color: $white;
                }
                .content {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                margin: 1vw 0;
                max-height: 50%;
                font-size:0.8vw;
                font-weight: 400;
                color: $white;
                }
                .btns{
                  margin-left: auto;
                  text-align: right;
                    img:first-child {
                      margin-right: 5px;
                    }
                    img{
                        width: 5.6vw;
                        height: 5.6vw;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 13.2vw;
        padding: 4vw 6.6vw;
        width: 55vw;
        border: 2px solid $sky_blue;
        background: $black-50;
        cursor: pointer;
        p {
            font-size: 5.3vw;
            font-weight: 900;
            color: $white;
            text-shadow: 0 0 0.2em $sky_blue;
            white-space: nowrap;
        }
        img{
            width: 2.7vw;
        }
    }
}
@media (min-width: 768px) {
  .modal {
    .gameDetail {
      padding: 0 15px;
      max-width: 768px;
      min-height: auto;
      max-height: 400px;
      .gameDetail_content {
        flex-direction: row;
        img {
          width: 300px;
          height: 300px;
          margin-bottom: 30px;
        }
        .info {
          align-items: center;
          padding: 35px 0 0 50px;
          height: 300px;
          .btn {
            margin-top: auto;
          }
        }
      }
    }
  }
  .container {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: auto;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.8vw 0.5vw;
        flex: 0 1 30%;
        width: 60vw;
        height: 12vw;
        border-radius: 1vw;
        .col-6 {
          img {
            width: 12vw;
            height: 12vw;
            border-radius: 0.5vw;
          }
          .btns {
            img {
              width: 2.3vw;
              height: 2.3vw;
            }
          }
        }
        .col-6:last-child {
          padding: 1vw;
          width: 10vw;
        }
      }
    }
    .btn {
      margin-top: 5vw;
      padding: 1.5vw 2.6vw;
      width: 22vw;
      p {
         font-size: 2vw;
      }
    }
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1500px;
  }
}
</style>
