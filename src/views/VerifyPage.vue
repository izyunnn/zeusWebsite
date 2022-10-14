<template>
  <div class="verify">
    <div class="verify_header">
      <p class="header">區塊鏈驗證方式</p>
      <p class="engHeader">Verification method</p>
    </div>
    <div class="verify_sha">
      <div class="title">防篡改 多重加密 公平公正</div>
      <ul>
        <li>
          SHA（Secure Hash Algorithm，譯作安全散裂算法）是美國國家安全局（NSA）設計，美國國家標準與技術研究院（NIST）發布的各種密碼散裂函數。用於確保信息傳輸完整一致。
        </li>
        <li>
          我們所有的牌將利用SHA 256加密生成“摘要”，並於玩家下注前告訴玩家。
        </li>
      </ul>
    </div>
    <div class="verify_step">
      <div class="title">可驗證的公平性</div>
      <ul>
        <li>
          <img src="@/assets/verifyPage/step1.png" alt="line" class="first">
          <div class="content" data-before="Step1">遊戲開始前我們將公佈所有牌的”摘要”摘要是由種子加密生成的32位字母和數字的組合</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step2.png" alt="line" class="second">
          <div class="content" data-before="Step2">當玩家下注完成後，我們將公佈原始字符（即種子） 牌的花色與點數由“種子”決定，一個種子通過SHA 256加密算法只能生成一個“摘要”這意味著摘要一但公佈，任何人都無法篡改遊戲結果“種子”</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step3.png" alt="line" class="third">
          <div class="content" data-before="Step3">玩家可利用哈希值工具驗證該字符是否與下注前的加密字符吻合種子可加密摘要，摘要不能逆向計算種子</div>
        </li>
      </ul>
      <div class="bottom">種子可加密摘要，摘要不能逆向計算種子</div>
    </div>
    <div class="verify_char">
      <div class="title" data-before="字符"></div>
      <div class="content">
        <div class="box">
          <div class="box_title">
            <p>種子</p>
            <span>未加密字符</span>
          </div>
          <div class="box_seed">
            <p>1W-5255b57b55d79d125d7715016e36910e7340d4956dcefd1050c2e646b2e4d021</p>
            <span>隨機字符，保證種子唯一性</span>
          </div>
          <ul>
            <li>
              <p>1</p>
              <span>牌的點數</span>
              <div class="info">1 > A</div>
              <div class="info">2 > 2</div>
              <div class="info">3 > 3</div>
              <div class="info">4 > 4</div>
              <div class="info">5 > 5</div>
              <div class="info">6 > 6</div>
              <div class="info">7 > 7</div>
              <div class="info">8 > 8</div>
              <div class="info">9 > 9</div>
              <div class="info">10 > 10</div>
              <div class="info">J > J</div>
              <div class="info">Q > Q</div>
              <div class="info">K > K</div>
            </li>
            <li>
              <p>D</p>
              <span>牌的花色</span>
              <div class="info">h > 紅桃</div>
              <div class="info">d > 方塊</div>
              <div class="info">s > 黑桃</div>
              <div class="info">c > 梅花</div>
            </li>
            <li>
              <p>-</p>
              <span>分隔符號</span>
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="box_title">
            <p>摘要</p>
            <span>已加密字符</span>
          </div>
          <div class="box_seed">
            <p>
              2c2b8781cec253fae816801ecb91254a9aa9b506de36384ba4d3fb6efe04059d50c79bcc53abd1afadb4d49db8c78d967d51619fa708cb5b909f129e0a3c8d00
            </p>
            <span>摘要是由種子加密生成的32位字母和數字的組合</span>
          </div>
        </div>
      </div>
      <div class="bottom" data-before="真公平不懼任何質疑，我們支持任何第三方SHA 256工具檢驗" data-after="您可以將種子復製到以下或其他網站進行摘要正確性驗證"></div>
      <div class="btns">
        <a href="https://www.functions-online.com/hash.html" target="_blank" class="btn">
          <p>驗證1</p>
          <img src="@/assets/verifyPage/double_right.png">
        </a>
        <a href="https://tool.oschina.net/encrypt?type=2" target="_blank" class="btn">
          <p>驗證2</p>
          <img src="@/assets/verifyPage/double_right.png">
        </a>
        <a href="https://emn178.github.io/online-tools/sha512.html" target="_blank" class="btn">
          <p>驗證3</p>
          <img src="@/assets/verifyPage/double_right.png">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VerifyPage',
  components: {},
  setup () {}
}
</script>
<style lang="scss" scoped>
.verify{
    background-image: url("@/assets/verifyPage/verifypage.png");
    height: 100%;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    .verify_header{
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
    .verify_sha{
      padding: 6.7vw 14vw;
      height: 44vw;
      .title{
        color: #ffc485;
        font-size: 3vw;
        font-weight: 700;
        margin: 2.5vw 0 2.5vw auto;
        width: 36vw;
      }
      ul{
        width: 36vw;
        margin-left: auto;
        list-style: none;
        li{
          color: #fff;
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 1.2vw;
        }
      }
    }
    .verify_step{
      background-image: url("@/assets/verifyPage/verify_step.png");
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      padding: 8.25vw 0 0;
      min-height: auto;
      height: 56vw;
      background-size: contain;
      .title{
        text-align: center;
        font-size: 3vw;
        font-weight: 700;
        margin-bottom: 3.8vw;
        color: #ffc485;
        width: 22vw;
        height: 4vh;
      }
      li:nth-child(1){
        margin-bottom: 1.5vw;
        margin-left: 28vw;
      }
      li:nth-child(2){
        margin-bottom: 3vw;
        margin-left: 34.5vw;
      }
      li:nth-child(3){
        margin-bottom: 0.78vw;
        margin-left: 32.5vw;
      }
      li{
        width: 43%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1vw;
        font-weight: 500;
        height: 7.5vw;
        padding: 0 1.32vw;
        color: #fff;
        .first{
          margin-right: 1.4vw;
          width: 9vw;
          height: 6vw;
        }
        .second{
          margin-right: 2.6vw;
          width: 9vw;
          height: 4vw;
        }
        .third{
          margin-right: 5vw;
          width: 14vw;
          height: 4vw;
        }
        .content{
          align-items: flex-start;
          justify-content: space-evenly;
          flex-direction: column;
          font-size: 1vw;
          font-weight: 500;
          line-height: 1.3vw;
          display: flex;
          height: 100%;
          word-break: break-word;
          white-space: pre-wrap;
          color: #fff;
        }
        .content::before{
          content: attr(data-before);
          font-size: 3vw;
          font-weight: 700;
          line-height: 3.1vw;
          background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .bottom{
        font-size: 1vw;
        font-weight: 500;
        margin: 4.6vw 0;
        padding: 1vw 11.3vw;
        width: auto;
        color: #fff;
        border: 1px solid #046db1;
        background: rgba(0,0,0,.5);
        text-align: center;
      }
    }
    .verify_char{
      padding: 0 0 13vw;
      min-height: auto;
      height: 77vw;
      .title{
        text-align: center;
      }
      .title::before{
        content: attr(data-before);
        font-size: 3vw;
        font-weight: 900;
        background: linear-gradient(rgb(247, 237, 148) 0%, rgb(251, 230, 186) 45.83%, rgb(239, 130, 21) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .content{
        text-align: center;
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
          margin: 3vw 1vw;
          padding: 2vw 2vw;
          max-width: 26vw;
          height: 85vh;
          border: 1px solid #046db1;
          background: rgba(0, 0, 0, 0.8);
          .box_title{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p{
              font-size: 2vw;
              font-weight: 900;
              background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            span{
              font-size: 1vw;
              font-weight: 900;
              margin: 1.3vw 0;
              color: #ffc485;
            }
          }
          .box_seed{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            p{
              font-size: 0.825vw;
              font-weight: 500;
              margin: 0 2.6vw;
              padding: 1vw 0.5vw;
              color: #49b7cd;
              border: 1px solid #00e0ff;
              background: rgba(0,224,255,.3);
              word-break: break-all;
            }
            span{
              font-size: 1vw;
              font-weight: 900;
              color: #ffc485;
              margin: 1.3vw 0;
              padding: 0 2.6vw;
            }
          }
          ul{
            display: flex;
            justify-content: space-between;
            li{
              display: flex;
              margin: 0 0.5vw;
              justify-content: flex-start;
              flex-direction: column;
              p{
                padding-top: 0.5vw;
                font-size: 1.5vw;
                font-weight: 900;
                width: 5.9vw;
                height: 2.5vw;
                border-radius: 5vw;
                color: #000;
                background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
              }
              span{
                font-size: 1vw;
                font-weight: 900;
                margin: 1.3vw 0;
                color: #ffc485;
              }
              .info{
                width: 55px;
                font-size: 1vw;
                font-weight: 350;
                margin-left: 1.2vw;
                margin-bottom: 0.25vw;
                color: #fff;
                white-space: nowrap;
              }
            }
          }
        }
      }
      .bottom{
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 6.6vw;
        text-align: center;
      }
      .bottom::before{
        content: attr(data-before);
        font-size:1.5vw;
        font-weight: 900;
        margin-bottom: 0.8vw;
        line-height: 1.25;
        background: linear-gradient(rgb(247, 237, 148) 0%, rgb(251, 230, 186) 45.83%, rgb(239, 130, 21) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .bottom::after{
        content: attr(data-before);
        font-size:1vw;
        font-weight: 900;
        background: linear-gradient(rgb(247, 237, 148) 0%, rgb(251, 230, 186) 45.83%, rgb(239, 130, 21) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .btns{
        flex-direction: row;
        margin-top: 6vw;
        display: flex;
        justify-content: center;
        .btn{
          padding: 0.8vw 1vw 0.8vw 1.5vw;
          border-radius: 2.6vw;
          display: flex;
          align-items: center;
          margin: 0 3vw;
          width: 15vw;
          height: 3.5vw;
          border: 1px solid #00e0ff;
          border-radius: 6.6vw;
          background: rgba(0,0,0,.5);
          p{
            font-size: 1.5vw;
            font-weight: 900;
            color: #fff;
            text-shadow: 0 0 0.2em #00e0ff;
          }
          img{
            width: 2.5vw;
          }
        }
      }
    }
}
</style>
