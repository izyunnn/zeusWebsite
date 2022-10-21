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
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-image: url("@/assets/whatPage/what.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-repeat: no-repeat;
.what_header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  height: 13.921875vw;
  min-height: 235px;
  background: $black-50;
  z-index: 10;
  p {
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
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
.what_blockchain {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6.7vw 14vw;
  height: 44vw;
  .title {
    text-align: center;
    margin: 1.8vw 0 0.8vw;
    color: $orange;
    font-size: 2vw;
    font-weight: 700;
  }
  ul {
    width: 57vw;
    li {
      margin-bottom: 1.8vw;
      color: $white;
      font-size: 1vw;
      font-weight: 500;
      line-height: 1.3vw;
    }
  }
  .bottom {
    margin-top: 2.6vw;
    padding: 1.5vw;
    width: 57vw;
    color: $orange;
    border: 1px solid $light-blue;
    background: $navy-blue-90;
    font-size: 0.8vw;
    font-weight: 500;
  }
}
.what_advantage {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8.25vw 0;
  height: 56vh;
  max-width: 100%;
  min-height: 110vh;
  background-image: url("@/assets/whatPage/advantage.png");
  background-size: cover;
  background-position: 50% 50%;
  .header {
    margin-bottom: 3.9vw;
    width: 56.7vw;
    color: $white;
    font-size: 3vw;
    font-weight: 900;
  }
  ul {
    width: 58vw;
    li {
      margin-bottom: 3vw;
      width: 75%;
      .title {
      margin-bottom: 1vw;
      color: $orange;
      font-size: 1.5vw;
      font-weight: 900;
      }
      p {
        margin-bottom: 0.8vw;
        color: $white;
        font-size: 1vw;
        font-weight: 500;
        line-height: 1.3vw;
      }
    }
  }
}
}
</style>
