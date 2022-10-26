<template>
  <div class="about">
    <div class="about_header" :data-before="$t('tabList.about')" data-after="About zeus"></div>
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
    height: 40vw;
    padding-top: 100px;
    background: $black-50;
    z-index: 10;
  }
  .about_header::before {
    content: attr(data-before);
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2vw;
    font-size: 5.3vw;
    font-weight: 700;
  }
  .about_header::after {
    content: attr(data-after);
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4vw;
    font-weight: 700;
  }
  .about_feature {
    display: flex;
    flex-direction: column;
    padding: 17.16vw 5.3vw;
    height: 86vw;
    .header {
      color: $white;
      font-size: 5.3vw;
      font-weight: 700;
    }
    .title {
      margin: 6.6vw 0 2vw;
      color: $orange;
      font-size: 4vw;
      font-weight: 700;
    }
    ul {
      width: 90vw;
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
    padding: 21.12vw 5.3vw;
    height: 103vw;
    background-image: url("@/assets/aboutPage/about_customer.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    .title {
      margin-bottom: 6vw;
      color: $orange;
      font-size: 4vw;
      font-weight: 900;
    }
    ul {
      li {
        margin-bottom: 2vw;
        color: $white;
        font-size: 2.64vw;
        font-weight: 500;
      }
    }
  }
  .about_gameStyle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vw;
    .title{
      width: 74.6vw;
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
@media (min-width: 768px) {
  .about {
    .about_header {
      height: 14vw;
      min-height: 235px;
    }
    .about_header::before {
      margin-bottom: 0.8vw;
      font-size: 3vw;
    }
    .about_header::after {
      font-size: 1.5vw;
    }
    .about_feature {
      padding: 6.7vw 14vw;
      height: 44vw;
      .header {
        font-size: 2vw;
      }
      .title {
        margin: 2.5vw 0 0.8vw;
        font-size: 1.5vw;
      }
      ul {
        width: 35vw;
      }
    }
    .about_customer{
      padding: 8.25vw 0;
      height: 56vw;
      .title {
        margin-bottom: 2.3vw;
        font-size: 1.5vw;
      }
      ul {
        li {
          margin-bottom: 0.8vw;
          font-size: 1vw;
        }
      }
    }
    .about_gameStyle {
      height: 46vw;
      .title {
        width: 40vw;
      }
    }
  }
}
</style>
