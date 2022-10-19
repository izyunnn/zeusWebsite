<template>
  <div class="what">
    <div class="what_header">
      <p class="header">{{ $t('tabList.what') }}</p>
      <p class="engHeader">What's blockchain games</p>
    </div>
    <div class="what_blockchain">
      <div class="title">BLOCKCHAIN</div>
      <ul>
        <li>{{ $t('whatPage.what_blockchain_content1') }}</li>
        <li>{{ $t('whatPage.what_blockchain_content2') }}</li>
        <li>{{ $t('whatPage.what_blockchain_content3') }}</li>
      </ul>
      <div class="bottom">{{ $t('whatPage.what_blockchain_bottom') }}</div>
    </div>
    <div class="what_advantage">
      <div class="header">{{ $t('whatPage.what_advantage_header') }}</div>
      <ul>
        <li>
          <div class="title">{{ $t('whatPage.what_advantage_title1') }}</div>
          <p>{{ $t('whatPage.what_advantage_content1') }}</p>
        </li>
        <li>
          <div class="title">{{ $t('whatPage.what_advantage_title2') }}</div>
          <p>{{ $t('whatPage.what_advantage_content2') }}</p>
        </li>
        <li>
          <div class="title">{{ $t('whatPage.what_advantage_title3') }}</div>
          <p>{{ $t('whatPage.what_advantage_content3') }}</p>
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
