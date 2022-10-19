<template>
  <div class="verify">
    <div class="verify_header">
      <p class="header">{{ $t('tabList.verify') }}</p>
      <p class="engHeader">Verification method</p>
    </div>
    <div class="verify_sha">
      <div class="title">{{ $t('verifyPage.verify_sha_title') }}</div>
      <ul>
        <li>{{ $t('verifyPage.verify_sha_content1') }}</li>
        <li>{{ $t('verifyPage.verify_sha_content2') }}</li>
      </ul>
    </div>
    <div class="verify_step">
      <div class="title">{{ $t('verifyPage.verify_step_header') }}</div>
      <ul>
        <li>
          <img src="@/assets/verifyPage/step1.png" alt="line" class="first">
          <div class="content" data-before="Step1">{{ $t('verifyPage.verify_step_content1') }}</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step2.png" alt="line" class="second">
          <div class="content" data-before="Step2">{{ $t('verifyPage.verify_step_content2') }}</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step3.png" alt="line" class="third">
          <div class="content" data-before="Step3">{{ $t('verifyPage.verify_step_content3') }}</div>
        </li>
      </ul>
      <div class="bottom">{{ $t('verifyPage.verify_step_bottom') }}</div>
    </div>
    <div class="verify_char">
      <div class="title" data-before="字符"></div>
      <div class="content">
        <div class="box">
          <div class="box_title">
            <p>{{ $t('verifyPage.verify_char_boxTitle1') }}</p>
            <span>{{ $t('verifyPage.verify_char_boxTitle1-1') }}</span>
          </div>
          <div class="box_seed">
            <p>1W-5255b57b55d79d125d7715016e36910e7340d4956dcefd1050c2e646b2e4d021</p>
            <span>{{ $t('verifyPage.verify_char_boxSeed1') }}</span>
          </div>
          <ul>
            <li>
              <p>1</p>
              <span>{{ $t('verifyPage.verify_char_boxSeed1_title1') }}</span>
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
              <span>{{ $t('verifyPage.verify_char_boxSeed1_title2') }}</span>
              <div class="info">h > {{ $t('verifyPage.verify_char_boxSeed1_info1') }}</div>
              <div class="info">d > {{ $t('verifyPage.verify_char_boxSeed1_info2') }}</div>
              <div class="info">s > {{ $t('verifyPage.verify_char_boxSeed1_info3') }}</div>
              <div class="info">c > {{ $t('verifyPage.verify_char_boxSeed1_info4') }}</div>
            </li>
            <li>
              <p>-</p>
              <span>{{ $t('verifyPage.verify_char_boxSeed1_title3') }}</span>
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="box_title">
            <p>{{ $t('verifyPage.verify_char_boxTitle2') }}</p>
            <span>{{ $t('verifyPage.verify_char_boxTitle2-1') }}</span>
          </div>
          <div class="box_seed">
            <p>
              2c2b8781cec253fae816801ecb91254a9aa9b506de36384ba4d3fb6efe04059d50c79bcc53abd1afadb4d49db8c78d967d51619fa708cb5b909f129e0a3c8d00
            </p>
            <span>{{ $t('verifyPage.verify_char_boxSeed2') }}</span>
          </div>
        </div>
      </div>
      <div class="bottom" data-before="真公平不懼任何質疑，我們支持任何第三方SHA 256工具檢驗" data-after="您可以將種子復製到以下或其他網站進行摘要正確性驗證"></div>
      <div class="btns">
        <a href="https://www.functions-online.com/hash.html" target="_blank" class="btn">
          <p>{{ $t('verifyPage.verify_char_btn1') }}</p>
          <img src="@/assets/verifyPage/double_right.png">
        </a>
        <a href="https://tool.oschina.net/encrypt?type=2" target="_blank" class="btn">
          <p>{{ $t('verifyPage.verify_char_btn2') }}</p>
          <img src="@/assets/verifyPage/double_right.png">
        </a>
        <a href="https://emn178.github.io/online-tools/sha512.html" target="_blank" class="btn">
          <p>{{ $t('verifyPage.verify_char_btn3') }}</p>
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
@import '~@/assets/scss/color.scss';
.verify {
  background-image: url("@/assets/verifyPage/verifypage.png");
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  .verify_header {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    height: 13.921875vw;
    min-height: 235px;
    background: $black-50;
    z-index: 10;
    p {
      background: linear-gradient(180deg,$gray 0%,$white 25%,$white 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header {
      margin-bottom: 0.8vw;
      font-size: 3vw;
      font-weight: 700;
    }
    .engHeader {
      font-size: 1.5vw;
      font-weight: 700;
    }
  }
  .verify_sha {
    padding: 6.7vw 14vw;
    height: 44vw;
    .title {
      margin: 2.5vw 0 2.5vw auto;
      width: 36vw;
      color: $orange;
      font-size: 3vw;
      font-weight: 700;
    }
    ul {
      margin-left: auto;
      width: 36vw;
      li {
        margin-bottom: 1.2vw;
        color: $white;
        font-size: 1vw;
        font-weight: 500;
      }
    }
  }
  .verify_step {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 8.25vw 0 0;
    min-height: auto;
    height: 56vw;
    background-image: url("@/assets/verifyPage/verify_step.png");
    background-size: contain;
    .title {
      text-align: center;
      margin-bottom: 3.8vw;
      width: 22vw;
      height: 4vh;
      color: $orange;
      font-size: 3vw;
      font-weight: 700;
    }
    li:nth-child(1) {
      margin-left: 28vw;
      margin-bottom: 1.5vw;
    }
    li:nth-child(2) {
      margin-left: 34.5vw;
      margin-bottom: 3vw;
    }
    li:nth-child(3) {
      margin-left: 32.5vw;
      margin-bottom: 0.78vw;
    }
    li {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 1.32vw;
      width: 43%;
      height: 7.5vw;
      color: $white;
      font-size: 1vw;
      font-weight: 500;
      .first {
        margin-right: 1.4vw;
        width: 9vw;
        height: 6vw;
      }
      .second {
        margin-right: 2.6vw;
        width: 9vw;
        height: 4vw;
      }
      .third {
        margin-right: 5vw;
        width: 14vw;
        height: 4vw;
      }
      .content {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        height: 100%;
        line-height: 1.3vw;
        color: $white;
        font-size: 1vw;
        font-weight: 500;
        word-break: break-word;
        white-space: pre-wrap;
      }
      .content::before {
        content: attr(data-before);
        font-size: 3vw;
        font-weight: 700;
        line-height: 3.1vw;
        background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .bottom {
      text-align: center;
      margin: 4.6vw 0;
      padding: 1vw 11.3vw;
      width: auto;
      color: $white;
      border: 1px solid $blue;
      background: $black-50;
      font-size: 1vw;
      font-weight: 500;
    }
  }
  .verify_char {
    padding: 0 0 13vw;
    min-height: auto;
    height: 77vw;
    .title {
      text-align: center;
    }
    .title::before {
      content: attr(data-before);
      font-size: 3vw;
      font-weight: 900;
      background: linear-gradient($yellow 0%, $light-yellow 45.83%, $orangeRGB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      .box {
        margin: 3vw 1vw;
        padding: 2vw 2vw;
        max-width: 26vw;
        height: 45vw;
        border: 1px solid $blue;
        background: $black-80;
        .box_title {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p {
            font-size: 2vw;
            font-weight: 900;
            background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          span {
            margin: 1.3vw 0;
            color: $orange;
            font-size: 1vw;
            font-weight: 900;
          }
        }
        .box_seed {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p {
            margin: 0 2.6vw;
            padding: 1vw 0.5vw;
            color: $tiffany;
            border: 1px solid $sky_blue;
            background: $green-lake;
            font-size: 0.825vw;
            font-weight: 500;
            word-break: break-all;
          }
          span {
            margin: 1.3vw 0;
            padding: 0 2.6vw;
            color: $orange;
            font-size: 1vw;
            font-weight: 900;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          li {
            display: flex;
            margin: 0 0.5vw;
            justify-content: flex-start;
            flex-direction: column;
            p {
              padding-top: 0.5vw;
              width: 5.9vw;
              height: 2.5vw;
              border-radius: 5vw;
              color: $black;
              background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
              font-size: 1.5vw;
              font-weight: 900;
              }
            span {
              margin: 1.3vw 0;
              color: $orange;
              font-size: 1vw;
              font-weight: 900;
            }
            .info {
              margin-left: 1.2vw;
              margin-bottom: 0.25vw;
              width: 55px;
              color: $white;
              font-size: 1vw;
              font-weight: 350;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 6.6vw;
    }
    .bottom::before {
      margin-bottom: 0.8vw;
      line-height: 1.25;
      content: attr(data-before);
      background: linear-gradient($yellow 0%, $light-yellow 45.83%, $orangeRGB 100%);
      font-size:1.5vw;
      font-weight: 900;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .bottom::after {
      content: attr(data-after);
      background: linear-gradient($yellow 0%, $light-yellow 45.83%, $orangeRGB 100%);
      font-size:1vw;
      font-weight: 900;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .btns {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 6vw;
      .btn {
        display: flex;
        align-items: center;
        margin: 0 3vw;
        padding: 0.8vw 1vw 0.8vw 1.5vw;
        width: 16.5vw;
        height: 3.5vw;
        border: 1px solid $sky-blue;
        border-radius: 6.6vw;
        background: $black-50;
        p {
          color: $white;
          font-size: 1.5vw;
          font-weight: 900;
          text-shadow: 0 0 0.2em $sky-blue;
        }
        img {
          width: 2.5vw;
        }
      }
    }
  }
}
</style>
