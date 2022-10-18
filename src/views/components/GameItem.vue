<template>
<div class="modal" v-if="modal">
    <div class="gameDetail">
        <img src="@/assets/modal/cancel.png" @click="modal = !modal"/>
        <div class="gameDetail_content">
            <img />
            <div class="info">
                <p></p>
                <span></span>
                <span></span>
                <div class="btn">
                    <img src="@/assets/anchor.png"/>
                    <p>PLAY</p>
                    <img src="@/assets/anchor.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
  <div class="title" data-before="GAME ITEMS" data-after="宙斯區塊鏈遊戲"></div>
  <ul>
    <li v-for="(item, index) in imgs" :key="index">
      <div class="col-6">
        <img :src="require(`@/assets/games/${item.name}.png`)" alt=“icon”/>
      </div>
      <div class="col-6">
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="btns">
            <img src="@/assets/games/search.png" @click="modal = !modal"/>
            <img src="@/assets/games/searchGame.png"/>
        </div>
      </div>
    </li>
  </ul>
  <div class="btn" @click="isShow = true">
    <p>MORE GAMES</p>
    <img src="@/assets/anchor.png"/>
  </div>
</div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'GameItem',
  components: {},
  setup () {
    const modal = ref(false)
    const isShow = ref(false)
    const imgs = reactive([{
      name: 'baccarat',
      title: '百家樂2.0',
      content: '百家樂源於義大利，是撲克遊戲常見之一，亦是受歡迎的遊戲之一。'
    },
    {
      name: 'dragon_tiger',
      title: '龍虎',
      content: '是由百家樂所衍生出來的一款紙牌遊戲，不同於百家樂之處，即為僅需派出一張牌比大小就可以定輸贏。'
    },
    {
      name: 'Xoc_Dia',
      title: '色碟',
      content: '色碟始於1909，是越南流行已久的傳統遊戲，是一件很經典，玩法很簡單的遊戲。'
    },
    {
      name: 'Hoo_Hey_Now',
      title: '魚蟹蝦',
      content: '魚蝦蟹，又稱魚蝦蟹骰寶，越南稱為匏蟹魚虎，是中國和越南傳統遊戲。'
    },
    {
      name: 'Teen_Patti',
      title: 'Teen Patti',
      content: '是一種賭博 紙牌遊戲，起源於印度次大陸 ，它起源於三張牌的英語遊戲，受到撲克的影響。'
    },
    {
      name: 'Ander_Bahar',
      title: 'Andar Bahar',
      content: 'Andar Bahar僅使用一副撲克牌五十二（52）張牌進行遊戲，不含王牌或百搭牌。'
    },
    {
      name: 'btc',
      title: 'BTC QuickWin',
      content: '宙斯獨家研發產品，結合全球最火熱的數字貨幣和下注模式。'
    },
    {
      name: 'Pk10',
      title: 'PK10',
      content: '北京賽车别名又稱為PK10，是根據北京福利彩票官方開獎結果所精心設計的遊戲，目前這款遊戲是大陸最熱門的快開彩。'
    },
    {
      name: 'Fan_Tan',
      title: '番攤',
      content: '「番攤」是款非常特別的遊戲是專屬於台灣、中國等少數亞洲國家才會知道的遊戲'
    }])
    return { isShow, modal, imgs }
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
                padding: 35px 0 0 50px;
                height: 300px;
                p {
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
