<template>
<div class="modal-2" v-if="modal2">
    <div class="login">
        <img src="@/assets/modal/cancel.png" alt="close" @click="modal2 = !modal2"/>
        <div class="login_content">
            <img class="logo" src="@/assets/logo.png" alt=“LOGO”/>
            <div class="input-text">
              <input id="account" type="text" :placeholder="$t('account')" autocomplete="off">
            </div>
            <div class="input-text">
              <input id="password" type="password" :placeholder="$t('password')" autocomplete="off">
            </div>
            <div class="btn">
              <img src="@/assets/anchor.png"/>
              <p>登入</p>
              <img src="@/assets/anchor.png"/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'loginModal',
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.modal-2 {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
  z-index: 20;
  .login {
    display: flex;
    justify-content: normal;
    align-items: normal;
    flex-direction: column;
    width: 90%;
    max-width: 440px;
    height: 465px;
    border-radius: 20px;
    border: 2px solid $sky_blue;
    background: $black-80;
    img {
      margin: 10px 10px 0 auto;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    .login_content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      img {
        margin: 0;
        padding: 0;
        margin-bottom: 35px;
        width: 235px;
        height: 51px;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        color: #747474;
        box-sizing: border-box;
      }
      .input-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        padding: 5px 10px;
        width: 290px;
        border: 1px solid #535353;
        border-radius: 5px;
        background: $black;
        input {
          padding: 1px 2px;
          font-size: 16px;
          font-weight: 400;
          width: 100%;
          height: 28px;
          color: $orange;
          border: none;
          border-radius: 5px;
          background: $black;
          outline: none;
        }
      }
      .btn {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 30px 0 25px;
        width: 160px;
        height: 42px;
        border: 1px solid $sky_blue;
        border-radius: 50px;
        background: $black-80;
        cursor: pointer;
        img {
          margin-top: 30px;
          width: 25px;
          height: 21px;
        }
        img:first-child {
          transform: rotate(180deg);
        }
        p {
          text-align: center;
          margin-bottom: 0;
          width: auto;
          font-size: 20px;
          font-weight: 900;
          color: $white;
          text-shadow: 0 0 0.2em $sky_blue;
        }
      }
    }
  }
}
</style>
