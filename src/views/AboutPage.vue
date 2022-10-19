<template>
  <div class="about">
    <div class="about_header">
      <p class="header">{{ $t('tabList.about') }}</p>
      <p class="engHeader">About zeus</p>
    </div>
    <div class="about_feature">
      <div class="header">{{ $t('aboutPage.about_feature_header') }}</div>
      <div class="title">{{ $t('aboutPage.about_feature_title') }}</div>
      <ul>
        <li>{{ $t('aboutPage.about_feature_content1') }}</li>
        <li>{{ $t('aboutPage.about_feature_content2') }}</li>
        <li>{{ $t('aboutPage.about_feature_content3') }}</li>
      </ul>
    </div>
    <div class="about_customer">
      <div class="title">{{ $t('aboutPage.about_customer_title') }}</div>
      <ul>
        <li>{{ $t('aboutPage.about_customer_content1') }}</li>
        <li>{{ $t('aboutPage.about_customer_content2') }}</li>
        <li>{{ $t('aboutPage.about_customer_content3') }}</li>
      </ul>
    </div>
    <div class="about_gameStyle">
      <img class="title" src="@/assets/aboutPage/word.png" alt="title" />
      <div class="content">
        <p>{{ $t('aboutPage.about_gameStyle_content') }}</p>
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
@import '~@/assets/scss/color.scss';
.about {
    background-image: url("@/assets/aboutPage/about.png");
    height: 100%;
    width: 100%;
    min-height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    .about_header {
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
    .about_feature {
      padding: 6.7vw 14vw;
      height: 44vw;
      display: flex;
      flex-direction: column;
      .header {
        font-size: 2vw;
        font-weight: 700;
        color: $white;
      }
      .title {
        font-size: 1.5vw;
        font-weight: 700;
        margin: 2.5vw 0 0.8vw;
        color: $orange;
      }
      ul {
        width: 35vw;
        list-style: none;
        li {
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 1.3vw;
          color: $white;
        }
      }
    }
    .about_customer {
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
      .title {
        font-size: 1.5vw;
        font-weight: 900;
        margin-bottom: 2.3vw;
        color: $orange;
      }
      ul {
        list-style: none;
        li {
          color: $white;
          font-size: 1vw;
          font-weight: 500;
          margin-bottom: 00.8vw;
        }
      }
    }
    .about_gameStyle {
      height: 46vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title{
        width: 40vw;
      }
      .content {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        p {
          font-size: 1.5vw;
          font-weight: 400;
          color: $white;
          width: 31.25vw;
          margin: 0 3vw;
        }
      }
      .content::before {
        content: "";
        width: 21vw;
        height: 0.6vw;
        background-image: url(@/assets/aboutPage/leftArr.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100% 50%;
      }
      .content::after {
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
