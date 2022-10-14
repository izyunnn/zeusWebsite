<template>
  <div class="what">
    <div class="what_header">
      <p class="header">什麼是區塊鏈遊戲</p>
      <p class="engHeader">What's blockchain games</p>
    </div>
    <div class="what_blockchain">
      <div class="title">BLOCKCHAIN</div>
      <ul>
        <li>區塊鏈（Blockchain）是用分佈式數據資料庫識別、傳播和記載信息的智能化對等網絡，對於大多數人來說，區塊鏈更多是和『虛擬貨幣』、『挖礦』或『比特幣』綁在一起的概念。</li>
        <li>但其實簡單來說『區塊鏈技術』就是在互聯網上建立一個公共帳本，由所有參與者共同紀錄和查核，而所有參與者包含了使用者或玩家，每個人的帳本都是〝相同的”、〝公開的〞，並且這些帳本中記載的訊息是〝不可被篡改的”。</li>
        <li>也就是說，區塊鏈遊戲產生的每個結果，都是絕對公平且不可能造假的。</li>
      </ul>
      <div class="bottom">
        目前市面上的遊戲都是掌控在遊戲開發者手中，不論是玩家購買虛擬寶物或是牌局機率的控制，都能在開發者的一個指令下收回或改變，玩家沒有任何抗議的餘地也無權逆轉，而其中博奕遊戲更容易發生弊端，也最為需要公平公正透明的遊戲資訊，因此宙斯將所有遊戲資訊上鍊，公開透明的讓玩家全權參與遊戲資訊帳本的紀錄，莊家無法篡改資訊的遊戲，更能保障玩家權益。
      </div>
    </div>
    <div class="what_advantage">
      <div class="header">區塊鏈優勢特性</div>
      <ul>
        <li>
          <div class="title">去中心化</div>
          <p>帳本是由大家一起記錄且共同持有，所以不需要中心服務器、也不需要第三方機構，每個人的電腦、通訊設備都是帳本的一部份。</p>
        </li>
        <li>
          <div class="title">透明性</div>
          <p>所有參與者的帳本都是公開透明且信息共享。</p>
        </li>
        <li>
          <div class="title">安全性</div>
          <p>由於大家都有一樣的全局帳本，所以個別帳本被毀壞不會影響整體，篡改單個帳本的信息也毫無意義，因為跟其他人的帳本資訊匹配不上，而這些帳本基本都分散在世界各地各個個體單獨控制，所以要篡改到其他人的帳本幾乎是不可能的。</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhatPage',
  components: {},
  setup () {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.what {
    background-image: url("@/assets/whatPage/what.png");
    height: 100%;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    .what_header {
      z-index: 10;
      height: 13.921875vw;
      min-height: 235px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-direction: column;
      padding-top: 100px;
      background: $black-50;
      p {
        background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .header {
        font-size: 3vw;
        margin-bottom: 0.8vw;
        font-weight: 700;
      }
      .engHeader {
        font-size: 1.5vw;
        font-weight: 700;
      }
    }
    .what_blockchain {
      padding: 6.7vw 14vw;
      height: 44vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .title {
        text-align: center;
        color: $orange;
        font-size: 2vw;
        font-weight: 700;
        margin: 1.8vw 0 0.8vw;
      }
      ul {
        width: 57vw;
        list-style: none;
        li {
          color: $white;
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 1.8vw;
          line-height: 1.3vw;
        }
      }
      .bottom {
        font-size: 0.8vw;
        font-weight: 500;
        margin-top: 2.6vw;
        padding: 1.5vw;
        width: 57vw;
        color: $orange;
        border: 1px solid $light-blue;
        background: $navy-blue-90;
      }
    }
    .what_advantage {
      background-image: url("@/assets/whatPage/advantage.png");
      min-height: 110vh;
      max-width: 100%;
      justify-content: flex-start;
      align-items: center;
      display: flex;
      flex-direction: column;
      background-size: cover;
      background-position: 50% 50%;
      padding: 8.25vw 0;
      height: 56vh;
      .header {
        font-size: 3vw;
        font-weight: 900;
        margin-bottom: 3.9vw;
        width: 56.7vw;
        color: $white;
      }
      ul {
        width: 58vw;
        list-style: none;
        li {
          margin-bottom: 3vw;
          width: 75%;
          .title {
          font-size: 1.5vw;
          font-weight: 900;
          margin-bottom: 1vw;
          color: $orange;
          }
          p {
            font-size: 1vw;
            font-weight: 500;
            margin-bottom: 0.8vw;
            line-height: 1.3vw;
            color: $white;
          }
        }
      }
    }
}
</style>
