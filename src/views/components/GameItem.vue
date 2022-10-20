<template>
<div class="modal" v-if="modal">
    <div class="gameDetail">
        <img src="@/assets/modal/cancel.png" @click="modal = !modal"/>
        <div class="gameDetail_content">
            <img :src="require(`@/assets/games/${name}.png`)" alt=“icon”/>
            <div class="info">
                <p class="title">{{ Title }}</p>
                <span>{{ Content }}</span>
                <span>{{ Intro }}</span>
                <div class="btn">
                    <img src="@/assets/anchor.png"/>
                    <p class="play">PLAY</p>
                    <img src="@/assets/anchor.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
  <div class="title" data-before="GAME ITEMS" data-after="宙斯區塊鏈遊戲"></div>
  <ul>
    <li v-for="item in imgs.slice(0, 6)" :key="item">
      <div class="col-6">
        <img :src="require(`@/assets/games/${item.name}.png`)" alt=“icon”/>
      </div>
      <div class="col-6">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="btns">
            <img src="@/assets/games/search.png" @click="setModal(item);modal = !modal"/>
            <img src="@/assets/games/searchGame.png"/>
        </div>
      </div>
    </li>
    <li v-for="item in imgs.slice(6,9)" :key="item" v-show="loadMore">
      <div class="col-6">
        <img :src="require(`@/assets/games/${item.name}.png`)" alt=“icon”/>
      </div>
      <div class="col-6">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="btns">
            <img src="@/assets/games/search.png" @click="setModal(item);modal = !modal"/>
            <img src="@/assets/games/searchGame.png"/>
        </div>
      </div>
    </li>
  </ul>
  <div class="btn" @click="loadMore = !loadMore">
    <p>MORE GAMES</p>
    <img src="@/assets/anchor.png"/>
  </div>
</div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'GameItem',
  components: {},
  computed: {
    imgs () {
      return [
        {
          name: 'baccarat',
          title: this.$t('gameList.baccarat_title'),
          content: this.$t('gameList.baccarat_content'),
          intro: this.$t('gameList.baccarat_intro')
        },
        {
          name: 'dragon_tiger',
          title: this.$t('gameList.dragon_tiger_title'),
          content: this.$t('gameList.dragon_tiger_content'),
          intro: this.$t('gameList.dragon_tiger_intro')
        },
        {
          name: 'Xoc_Dia',
          title: this.$t('gameList.xoc_dia_title'),
          content: this.$t('gameList.xoc_dia_content'),
          intro: this.$t('gameList.xoc_dia_intro')
        },
        {
          name: 'Hoo_Hey_Now',
          title: this.$t('gameList.hoo_hey_now_title'),
          content: this.$t('gameList.hoo_hey_now_content'),
          intro: this.$t('gameList.hoo_hey_now_intro')
        },
        {
          name: 'Teen_Patti',
          title: this.$t('gameList.teen_patti_title'),
          content: this.$t('gameList.teen_patti_content'),
          intro: this.$t('gameList.teen_patti_intro')
        },
        {
          name: 'Ander_Bahar',
          title: this.$t('gameList.andar_bahar_title'),
          content: this.$t('gameList.andar_bahar_content'),
          intro: this.$t('gameList.andar_bahar_intro')
        },
        {
          name: 'btc',
          title: this.$t('gameList.btc_quickWin_title'),
          content: this.$t('gameList.btc_quickWin_content'),
          intro: this.$t('gameList.btc_quickWin_intro')
        },
        {
          name: 'Pk10',
          title: this.$t('gameList.PK10_title'),
          content: this.$t('gameList.PK10_content'),
          intro: this.$t('gameList.PK10_intro')
        },
        {
          name: 'Fan_Tan',
          title: this.$t('gameList.fan_tan_title'),
          content: this.$t('gameList.fan_tan_content'),
          intro: this.$t('gameList.fan_tan_intro')
        }
      ]
    }
  },
  setup () {
    const loadMore = ref(false)
    const modal = ref(false)
    function setModal (data) {
      this.name = data.name
      this.Title = data.title
      this.Content = data.content
      this.Intro = data.intro
    }
    return { modal, setModal, loadMore }
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
        max-width: 768px;
        max-height: auto;
        max-height: 400px;
        width: 90%;
        border-radius: 20px;
        border: 2px solid $sky_blue;
        background: $black-80;
        img {
            margin: 10px 10px 0 auto;
            width: 48px;
            height: 48px;
            cursor: pointer;
        }
        .gameDetail_content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 25px 25px;
            height: 100%;
            img {
                width: 300px;
                height: 300px;
                margin-bottom: 0;
            }
            .info {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                padding: 35px 0 0 50px;
                height: 300px;
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
                    margin: 30px 0 0;
                    margin-top: auto;
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
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    width: 80%;
    height: 100%;
    .title {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.8vw 0.5vw;
            flex: 0 1 30%;
            height: 12vw;
            width: 68.6vw;
            border: 2px solid $sky_blue;
            border-radius: 1vw;
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
                flex: 1 1 50%;
                padding: 1vw;
            }
            .col-6 {
                img {
                width: 12vw;
                height: 12vw;
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
                    img:first-child {
                        margin-right: 5px;
                        margin-left: 4vw;
                    }
                    img{
                        width: 2.3vw;
                        height: 2.3vw;
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
        margin-top: 5vw;
        padding: 1.5vw 2.6vw;
        width: 22vw;
        border: 2px solid $sky_blue;
        background: $black-50;
        cursor: pointer;
        p {
            font-size: 2vw;
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
</style>
