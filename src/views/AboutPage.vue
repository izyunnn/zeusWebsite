<template>
  <div class="about">
    <div class="about_header">
      <p class="header">關於宙斯區塊鏈遊戲</p>
      <p class="engHeader">About zeus</p>
    </div>
    <div class="about_feature">
      <div class="header">Zeus區塊鏈遊戲特色</div>
      <div class="title">360度無死角絕對公平公正且無法篡改</div>
      <ul>
        <li>秉承區塊鏈特性無法被篡改，且每一局都是即時進行，每張牌每個動作紀錄都是公開可以被查詢的，完全無法做任何作弊行為，玩家能絕對放心遊戲。</li>
        <li>此外宙斯區塊鏈每款遊戲也都送至國際博奕研究室（Gaming Laboratories International），簡稱GLI認證，完全符合博彩相關法律和技術規格要求。</li>
        <li>GLI 本身擁有美國和國際認證，符合ISO / IEC 17025，17020和17065標準，具有測試與驗證遊戲、賭博和彩票行業的技術能力。GLI 同時為全球近400個博彩監管機構所指定的官方測試實驗室，提供絕對公正的測試與認證，也是目前國際博奕市場中，最具公信力的規範之一。</li>
      </ul>
    </div>
    <div class="about_customer">
      <div class="title">遊戲品項獨特 以東南亞及印度熱門遊戲為主</div>
      <ul>
        <li>中國市場：百家樂、北京賽車</li>
        <li>印度市場：Teenpatti、Rummy、Andar Bahar</li>
        <li>東南亞市場：色碟、番攤、魚蝦蟹、三張牌、四張牌</li>
      </ul>
    </div>
    <div class="about_gameStyle">
      <img class="title" src="@/assets/aboutPage/word.png" alt="title" />
      <div class="content">
        <p>跳脫傳統遊戲畫面獨樹一格的遊戲畫風</p>
      </div>
      <img src="@/assets/aboutPage/about_gamestyle.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  components: {},
  setup () {}
}
</script>
<style lang="scss" scoped>
.about{
    background-image: url("@/assets/aboutPage/about.png");
    height: 100%;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    .about_header{
      z-index: 10;
      height: 13.921875vw;
      min-height: 235px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-direction: column;
      padding-top: 100px;
      background: rgba(0,0,0,.5);
      p{
        background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .header{
        font-size: 3vw;
        margin-bottom: 0.8vw;
        font-weight: 700;
      }
      .engHeader{
        font-size: 1.5vw;
        font-weight: 700;
      }
    }
    .about_feature{
      padding: 6.7vw 14vw;
      height: 44vw;
      display: flex;
      flex-direction: column;
      .header{
        font-size: 2vw;
        font-weight: 700;
        color: #fff;
      }
      .title{
        font-size: 1.5vw;
        font-weight: 700;
        margin: 2.5vw 0 0.8vw;
        color: #ffc485;
      }
      ul{
        width: 35vw;
        list-style: none;
        li{
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 1.3vw;
          color: #fff;
        }
      }
    }
    .about_customer{
      background-image: url("@/assets/aboutPage/about_customer.png");
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      padding: 8.25vw 0;
      height: 56vw;
      text-align: center;
      .title{
        font-size: 1.5vw;
        font-weight: 900;
        margin-bottom: 2.3vw;
        color: #ffc485;
      }
      ul{
        list-style: none;
        li{
          color: #fff;
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 00.8vw;
        }
      }
    }
    .about_gameStyle{
      height: 46vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title{
        width: 40vw;
      }
      .content{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        p{
          font-size: 1.5vw;
          font-weight: 400;
          color: #fff;
          width: 31.25vw;
          margin: 0 3vw;
        }
      }
      .content::before{
        content: "";
        width: 21vw;
        height: 0.6vw;
        background-image: url(@/assets/aboutPage/leftArr.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100% 50%;
      }
      .content::after{
        content: "";
        width: 21vw;
        height: 0.6vw;
        background-image: url(@/assets/aboutPage/rightArr.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100% 50%;
      }
      img{
        width: 100%;
      }
    }
}
</style>
