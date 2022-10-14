<template>
<div class="background">
    <div class="title">
        <h1>GAME ITEMS</h1>
        <span class="words">宙斯區塊鏈遊戲</span>
    </div>
     <div class="containers">
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/baccarat.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/dragon_tiger.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/Hoo_Hey_Now.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/Xoc_Dia.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/Ander_Bahar.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="container">
        <div class="game_item">
            <img src="@/assets/games/Pk10.png"/>
            <span class="title">區塊鏈百家樂</span>
            <span class="content">宙斯引領新世代，使用全球公認的區塊鏈加密技術，每張發出的牌皆可透過密碼</span>
        </div>
    </div>
    <div class="moreGame">
        <img src="@/assets/games/Vector.png"/>
    </div>
   </div>
</div>
</template>
<script>
export default {
  name: 'GameItem',
  components: {},
  setup () {}
}
</script>
<style lang="scss" scoped>
.background{
    align-items: center;
    background-image: url("@/assets/homepage/content2.png");
    min-height: 131vh;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    z-index: 0;
    display: flex;
    flex-direction: column;
    h1{
       color: #C7C7C7;
       font-size: 6.25rem;
       font-weight: 900;
       margin:100px 0 0 2.4em;
       width: 700px;
       height: 121px;
       font-family: "Inter";
      }
    .words{
       color: #C7C7C7;
       margin:0 0 0 6em;
       font-size: 2.5rem;
       font-weight: 700;
    }
    .containers{
       margin:50px 0 0 240px;
       display: flex;
       width: 80%;
       min-height: 45vh;
       flex-wrap: wrap;
       .container{
        margin:1% 0 0 1%;
        flex-direction: column;
        overflow: hidden;
        border-radius: 3%;
        width: 24.38vw;
        height: 21.67vh;
        border: 2px solid #00E0FF;
        }
        img{
        width: 12.19vw;
        height: 21.67vh;
        }
        span{
        width: 5.63vw;
        height: 2.04vh;
        margin:25px 25px 25px 25px;
        color: white;
        position:absolute;
        }
        .title{
        font-size: 1.125rem;
        font-weight: 900;
        }
        .content{
        padding-top:40px;
        width:8.7vw;
        height:9.54vh;
        font-size:1rem;
        }
        .moreGame{
        padding-top: 25px;
        margin:10% 50% 50% 33%;
        font-family: "Inter";
        text-align: center;
        border: 2px solid #00E0FF;
        min-width: 23.23vw;
        min-height: 9.44vh;
        font-size: 2.5rem;
        font-weight: 900;
        color: white;
          img{
              width: 335px;
              height: 47.15px;
          }
        }
    }
}
</style>
