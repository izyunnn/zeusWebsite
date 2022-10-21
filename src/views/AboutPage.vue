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
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-image: url("@/assets/aboutPage/about.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  .about_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 13.921875vw;
    min-height: 235px;
    padding-top: 100px;
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
  .about_feature {
    display: flex;
    flex-direction: column;
    padding: 6.7vw 14vw;
    height: 44vw;
    .header {
      color: $white;
      font-size: 2vw;
      font-weight: 700;
    }
    .title {
      margin: 2.5vw 0 0.8vw;
      color: $orange;
      font-size: 1.5vw;
      font-weight: 700;
    }
    ul {
      width: 35vw;
      li {
        margin-bottom: 1.3vw;
        color: $white;
        font-size: 1vw;
        font-weight: 500;
      }
    }
  }
  .about_customer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 8.25vw 0;
    height: 56vw;
    background-image: url("@/assets/aboutPage/about_customer.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    .title {
      margin-bottom: 2.3vw;
      color: $orange;
      font-size: 1.5vw;
      font-weight: 900;
    }
    ul {
      li {
        margin-bottom: 00.8vw;
        color: $white;
        font-size: 1vw;
        font-weight: 500;
      }
    }
  }
  .about_gameStyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 46vw;
    .title{
      width: 40vw;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 10px;
      p {
        margin: 0 3vw;
        width: 31.25vw;
        color: $white;
        font-size: 1.5vw;
        font-weight: 400;
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
