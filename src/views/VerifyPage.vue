<template>
  <div class="verify">
    <div class="verify_header" :data-before="$t('tabList.verify')" data-after="Verification method"></div>
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
          <img src="@/assets/verifyPage/step1.png" alt="line" class="first" v-if="(device !== 'mobile')">
          <img src="@/assets/verifyPage/straight.png" alt="line" class="straight" v-else>
          <div class="content" data-before="Step1">{{ $t('verifyPage.verify_step_content1') }}</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step2.png" alt="line" class="second" v-if="(device !== 'mobile')">
          <img src="@/assets/verifyPage/straight.png" alt="line" class="straight" v-else>
          <div class="content" data-before="Step2">{{ $t('verifyPage.verify_step_content2') }}</div>
        </li>
        <li>
          <img src="@/assets/verifyPage/step3.png" alt="line" class="third" v-if="(device !== 'mobile')">
          <img src="@/assets/verifyPage/straight.png" alt="line" class="straight" v-else>
          <div class="content" data-before="Step3">{{ $t('verifyPage.verify_step_content3') }}</div>
        </li>
      </ul>
      <div class="bottom">{{ $t('verifyPage.verify_step_bottom') }}</div>
    </div>
    <div class="verify_char">
      <div class="title" :data-before="$t('verifyPage.verify_char_title')" ></div>
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
      <div class="bottom" :data-before="$t('verifyPage.verify_char_bottom_title')" :data-after="$t('verifyPage.verify_char_bottom_content')" ></div>
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
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
export default {
  name: 'VerifyPage',
  components: {},
  setup () {
    const { device } = storeToRefs(useAppStore())
    return { device }
  }
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
    height: 39.6vw;
    background: $black-50;
    z-index: 10;
  }
  .verify_header::before {
    content: attr(data-before);
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2vw;
    font-size: 5.3vw;
    font-weight: 700;
  }
  .verify_header::after {
    content: attr(data-after);
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4vw;
    font-weight: 700;
  }
  .verify_sha {
    padding: 17.16vw 5.3vw;
    height: 112.2vw;
    .title {
      margin: 6.6vw 0 6.6vw auto;
      width: 100%;
      color: $orange;
      font-size: 5.3vw;
      font-weight: 700;
    }
    ul {
      margin-left: auto;
      width: 100%;
      li {
        margin-bottom: 3.3vw;
        color: $white;
        font-size: 2.64vw;
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
    padding: 21.12vw 0 ;
    min-height: 103vw;
    height: 56vw;
    background-image: url("@/assets/verifyPage/verify_step.png");
    background-size: cover;
    .title {
      text-align: center;
      margin-bottom: 6vw;
      width: 22vw;
      height: 4vh;
      color: $orange;
      font-size: 5.3vw;
      font-weight: 700;
      white-space: nowrap;
    }
    li {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 1.32vw;
      height: 19.14vw;
      color: $white;
      font-size: 2.64vw;
      font-weight: 500;
      .first {
        margin-right: 0.5vw;
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
      .straight {
        width: 70px;
        height: 6px;
      }
      .content {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        width: 70%;
        height: 100%;
        color: $white;
        line-height: 3.2vw;
        font-size: 1vw;
        font-weight: 500;
        word-break: break-word;
        white-space: pre-wrap;
      }
      .content::before {
        content: attr(data-before);
        font-size: 5.3vw;
        font-weight: 700;
        line-height: 6.3vw;
        background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .bottom {
      text-align: center;
      margin: 4vw;
      padding: 2.64vw 1.32vw;
      width: 75%;
      color: $white;
      border: 1px solid $blue;
      background: $black-50;
      font-size: 2.64vw;
      font-weight: 500;
    }
  }
  .verify_char {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8vw 0 20vw;
    min-height: 196.02;
    .title {
      text-align: center;
    }
    .title::before {
      content: attr(data-before);
      font-size: 8vw;
      font-weight: 900;
      background: linear-gradient($yellow 0%, $light-yellow 45.83%, $orangeRGB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      .box {
        margin: 6.6vw 3.3vw;
        padding: 5.3vw 5.3vw;
        max-width: 66vw;
        height: 100%;
        border: 1px solid $blue;
        background: $black-80;
        .box_title {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p {
            font-size: 5.3vw;
            font-weight: 900;
            background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          span {
            padding: 0 2.64vw;
            margin: 3.3vw 0;
            color: $orange;
            font-size: 2.64vw;
            font-weight: 900;
          }
        }
        .box_seed {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p {
            margin: 0 6.6vw;
            padding: 2.64vw 1.32vw;
            color: $tiffany;
            border: 1px solid $sky_blue;
            background: $green-lake;
            font-size: 2vw;
            font-weight: 500;
            word-break: break-all;
          }
          span {
            margin: 3.3vw 0;
            padding: 0 2.6vw;
            color: $orange;
            font-size: 2.64vw;
            font-weight: 900;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: normal;
          padding: 0 4vw;
          li {
            display: flex;
            margin: 0 0.5vw;
            justify-content: flex-start;
            flex-direction: column;
            p {
              padding-top: 0.5vw;
              width: 15vw;
              height: 6.3vw;
              border-radius: 13vw;
              color: $black;
              background: linear-gradient(180deg,#c7c7c7 0%,#ffffff 25%,#c7c7c7 100%);
              font-size: 4vw;
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
      margin-bottom: 3.3vw;
      line-height: 1.25;
      content: attr(data-before);
      background: linear-gradient($yellow 0%, $light-yellow 45.83%, $orangeRGB 100%);
      font-size: 4vw;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 15.8vw;
      .btn {
        display: flex;
        align-items: center;
        padding: 2.12vw 2.64vw 2.12vw 1.5vw;
        margin: 4vw 0;
        width: 37.5vw;
        height: 10vw;
        border: 1px solid $sky-blue;
        border-radius: 6.6vw;
        background: $black-50;
        p {
          color: $white;
          font-size: 4vw;
          font-weight: 900;
          text-shadow: 0 0 0.2em $sky-blue;
        }
        img {
          width: 6.6vw;
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .verify {
    .verify_header {
      height: 14vw;
      min-height: 235px;
    }
    .verify_header::before {
      margin-bottom: 0.8vw;
      font-size: 3vw;
    }
    .verify_header::after {
      font-size: 1.5vw;
    }
    .verify_sha {
      padding: 6.7vw 14vw;
      height: 44vw;
      .title {
        margin: 2.5vw 0 2.5vw auto;
        width: 36vw;
        font-size: 3vw;
      }
      ul {
        width: 36vw;
        li {
          margin-bottom: 1.2vw;
          font-size: 1vw;
        }
      }
    }
    .verify_step {
      padding: 8.25vw 0 0;
      min-height: auto;
      height: 56vw;
      background-size: contain;
      .title {
        margin-bottom: 3.8vw;
        font-size: 3vw;
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
        justify-content: end;
        align-items: center;
        margin-bottom: 0.78vw;
        width: 43%;
        height: 7.5vw;
        font-size: 1vw;
        font-weight: 500;
        .first {
          margin-right: 1.3vw;
          width: 9vw;
          height: 5.8vw;
        }
        .second {
          margin-right: 2.6vw;
          width: 8.9vw;
          height: 4.2vw;
        }
        .third {
          margin-right: 5vw;
          width: 14vw;
          height: 4vw;
        }
        .content {
          line-height: 1.3vw;
          font-size: 1vw;
        }
        .content::before {
          font-size: 3vw;
          line-height: 3.1vw;
        }
      }
      .bottom {
        margin: 4.6vw 0;
        padding: 1vw 11.3vw;
        width: auto;
        font-size: 1vw;
      }
    }
    .verify_char {
      padding: 3vw 0 13vw;
      margin-top: 35px;
      min-height: auto;
      height: 76.5vw;
      .title::before {
        font-size: 3vw;
      }
      .content {
        flex-direction: row;
        .box {
          margin: 5vw 1.3vw;
          padding: 2vw 2vw;
          width: 26vw;
          max-height: 46vw;
          .box_title {
            p {
              font-size: 2vw;
            }
            span {
              margin: 1.3vw 0;
              font-size: 1vw;
            }
          }
          .box_seed {
            p {
              margin: 0 2.6vw;
              padding: 1vw 0.5vw;
              font-size: 0.8vw;
            }
            span {
              margin: 1.3vw 0;
              font-size: 1vw;
            }
          }
          ul {
            padding: 0;
            li{
              p {
                width: 5.9vw;
                height: 2.5vw;
                border-radius: 5vw;
                font-size: 1.5vw;
              }
            }
          }
        }
      }
      .bottom::before {
        font-size: 1.5vw;
        margin-bottom: 0.78vw;
      }
      .bottom::after {
        font-size: 1vw;
      }
      .btns {
        flex-direction: row;
        margin-top: 6.2vw;
        .btn {
          margin: 0 3vw;
          padding: 0.8vw 1vw 0.8vw 1.5vw;
          width: 14.6vw;
          height: 3.8vw;
          border-radius: 2.6vw;
          p {
            font-size: 1.5vw;
          }
          img {
            width: 2.6vw;
          }
        }
      }
    }
  }
}
</style>
