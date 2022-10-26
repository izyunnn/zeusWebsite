<template>
  <div class="what">
    <div class="what_header" :data-before="$t('tabList.what')" data-after="What's blockchain games"></div>
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
    height: 39.6vw;
    background: $black-50;
    z-index: 10;
  }
  .what_header::before {
    content: attr(data-before);
    margin-bottom: 2vw;
    font-size: 5.3vw;
    font-weight: 700;
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .what_header::after {
    content: attr(data-after);
    font-size: 4vw;
    font-weight: 700;
    background: linear-gradient(180deg,$gray 0%,$white 25%,$gray 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .what_blockchain {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 17.2vw 2.64vw;
    height: 99vw;
    .title {
      text-align: center;
      margin: 4.3vw 0 2vw;
      color: $orange;
      font-size: 4vw;
      font-weight: 700;
    }
    ul {
      width: 90vw;
      li {
        margin-bottom: 6.6vw;
        color: $white;
        font-size: 2.6vw;
        font-weight: 500;
        line-height: 3.3vw;
      }
    }
    .bottom {
      margin-top: 6.6vw;
      padding: 4vw;
      color: $orange;
      border: 1px solid $light-blue;
      background: $navy-blue-90;
      font-size: 2vw;
      font-weight: 500;
    }
  }
  .what_advantage {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 21.1vw 0;
    height: 142.6vw;
    background-image: url("@/assets/whatPage/advantage.png");
    background-size: cover;
    background-position: 50% 50%;
    .header {
      margin-bottom: 10vw;
      width: 90vw;
      color: $white;
      font-size: 8vw;
      font-weight: 900;
    }
    ul {
      width: 90vw;
      li {
        margin-bottom: 8vw;
        width: 75%;
        .title {
          margin-bottom: 2.64vw;
          color: $orange;
          font-size: 4vw;
          font-weight: 900;
        }
        p {
          margin-bottom: 2vw;
          color: $white;
          font-size: 2.64vw;
          font-weight: 500;
          line-height: 3.3vw;
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .what {
    .what_header {
      height: 14vw;
      min-height: 235px;
    }
    .what_header::before{
      margin-bottom: 0.8vw;
      font-size: 3vw;
    }
    .what_header::after {
      font-size: 1.5vw;
    }
    .what_blockchain {
      padding: 6.7vw 14vw;
      height: 44vw;
      .title {
        font-size: 2vw;
        margin: 1.8vw 0 0.78vw;
      }
      ul {
        width: 57vw;
        li {
          margin-bottom: 1.8vw;
          font-size: 1vw;
          font-weight: 500;
          line-height: 1.3vw;
        }
      }
      .bottom {
        margin-top: 2.6vw;
        padding: 1.5vw;
        width: 57vw;
        font-size: 0.8vw;
      }
    }
    .what_advantage {
      padding: 8.25vw 0;
      height: 55.7vw;
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
          .title {
            margin-bottom: 1vw;
            font-size: 1.5vw;
            font-weight: 900;
          }
          p {
            margin-bottom: 0.8vw;
            font-size: 1vw;
            font-weight: 500;
            line-height: 1.3vw;
          }
        }
      }
    }
  }
}
</style>
