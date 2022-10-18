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
import { ref, reactive } from 'vue'
export default {
  name: 'GameItem',
  components: {},
  setup () {
    const loadMore = ref(false)
    const modal = ref(false)
    const imgs = reactive([
      {
        name: 'baccarat',
        title: '百家樂2.0',
        content: '百家樂源於義大利，是撲克遊戲常見之一，亦是受歡迎的遊戲之一。',
        intro: '玩家可下注選擇莊家或閒家，牌麵點數相加個數字接進9為勝利方，牌麵點數最大為9點最小0點。雙方至少會發兩張牌，第一及第三張牌發給閒家，第二及第四張牌則發給莊家視情況補牌，補牌規則必須完全遵照照明規定。'
      },
      {
        name: 'dragon_tiger',
        title: '龍虎',
        content: '是由百家樂所衍生出來的一款紙牌遊戲，不同於百家樂之處，即為僅需派出一張牌比大小就可以定輸贏。',
        intro: '是由百家樂所衍生出來的一款紙牌遊戲，不同於百家樂之處，即為僅需派出一張牌比大小就可以定輸贏。'
      },
      {
        name: 'Xoc_Dia',
        title: '色碟',
        content: '色碟始於1909，是越南流行已久的傳統遊戲，是一件很經典，玩法很簡單的遊戲。',
        intro: '用身邊隨處可得的器具即可進行遊戲，用碗蓋住碟上的4顆紅白雙色鈕扣，快速搖動後出現的結果做為下注組合，玩家扔碗中留下的最終結果，簡單有趣。'
      },
      {
        name: 'Hoo_Hey_Now',
        title: '魚蟹蝦',
        content: '魚蝦蟹，又稱魚蝦蟹骰寶，越南稱為匏蟹魚虎，是中國和越南傳統遊戲。',
        intro: '其型式與賠率跟另一薄片方法骰寶基本一樣，採用骰子由魚，蝦，蟹，老虎，葫蘆及雞代替點數。'
      },
      {
        name: 'Teen_Patti',
        title: 'Teen Patti',
        content: '是一種賭博 紙牌遊戲，起源於印度次大陸 ，它起源於三張牌的英語遊戲，受到撲克的影響。',
        intro: '在遊戲開始之前，所有人都需要按照最低數目押注，這筆資金（遊戲里為虛擬幣）放在桌子中央，發牌者（莊家）每次給所有人一張牌，直到每人三張為止。在發牌的過程中，每個人都可以根據自己手中的牌判斷是否要增加籌碼，在下注之前，每個人都可以看自己的牌，如果放棄則把牌面朝下放在桌子上。'
      },
      {
        name: 'Ander_Bahar',
        title: 'Andar Bahar',
        content: 'Andar Bahar僅使用一副撲克牌五十二（52）張牌進行遊戲，不含王牌或百搭牌。',
        intro: '選擇一張（1）牌作為「起手牌」及兩（2）面（Andar和Bahar），然後依次從「Andar」及「Bahar」抽一張（1）牌，直到某張牌與「起手牌」的點數匹配時，同一張點數牌的那一方將獲勝。'
      },
      {
        name: 'btc',
        title: 'BTC QuickWin',
        content: '宙斯獨家研發產品，結合全球最火熱的數字貨幣和下注模式。',
        intro: '从BTC/從BTC/USDT價格波動圖預測30秒內的貨幣匯率趨勢，選擇『購買』或『賣』來賺取交易金額。且提供三種技術指標與路紙，簡單界面玩法與熱門話題結合，幫助您『30秒，快速贏得財富未來。』'
      },
      {
        name: 'Pk10',
        title: 'PK10',
        content: '北京賽车别名又稱為PK10，是根據北京福利彩票官方開獎結果所精心設計的遊戲，目前這款遊戲是大陸最熱門的快開彩。',
        intro: '北京賽車一天開獎44場，每20分鐘進行一場比賽365天不間斷，開獎是依據大陸的北京賽車官網開獎，全天09：10至23：50。遊戲由車號01〜10共10台車進行比賽的結果作為開獎號碼。'
      },
      {
        name: 'Fan_Tan',
        title: '番攤',
        content: '「番攤」是款非常特別的遊戲是專屬於台灣、中國等少數亞洲國家才會知道的遊戲',
        intro: ''
      }
    ])
    function setModal (data) {
      this.name = data.name
      this.Title = data.title
      this.Content = data.content
      this.Intro = data.intro
    }
    return { modal, imgs, setModal, loadMore }
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
