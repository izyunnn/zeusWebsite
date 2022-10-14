<template>
<div class="navbar">
  <div class="right">
    <a href="/home" class="home_link"><img class="logo" src="@/assets/logo.png"/></a>
      <ul>
        <li><a href="/what" class="router_link">什麼是區塊鏈遊戲</a></li>
        <li><a href="/about" class="router_link">關於宙斯區塊鏈遊戲</a></li>
        <li><a href="/verify" class="router_link">區塊鏈驗證方式</a></li>
      </ul>
  </div>
  <div class="left">
    <div class="login">
      <img src="@/assets/login.png"/>
      <p>登入</p>
    </div>
    <div class="langSelector">
      <div class="btn">
        <img src="@/assets/lang.png">
        <p>繁體中文</p>
      </div>
      <div class="list_on">
        <ul>
          <li>English</li>
          <li>简体中文</li>
          <li>繁體中文</li>
          <li>日本語</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
  .navbar{
    padding: 0 5.15625vw;
    display: flex;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    box-shadow: 0 5px 5px #00000040;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100px;
    width: 100%;
    .right{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .home_link{
        width: 275px;
        height: 60px;
        .logo{
        width: 275px;
        height: 60px;
        }
      }
      ul{
        display: flex;
        white-space:nowrap;
        li{
          margin:0 30px;
          position: relative;
          a{
            list-style-type: none;
            color: white;
            text-decoration: none;
          }
        }
      }
      li::before{
        content: "";
        position: absolute;
        bottom: -8px;
        width: 30px;
        border-bottom: 2px solid #ffffff;
      }
      li::after{
        content:"★";
        position: absolute;
        top: -12px;
        width: 30px;
        font-size: 12px;
        font-weight: 400;
        color: white;
      }
    }
    .left{
        margin-left: 42.5em;
        text-align: center;
        align-items: center;
        display: flex;
        .login{
          text-align: center;
          align-items: center;
          display: flex;
          padding: 15px;
          margin-right: 30px;
          width: 100px;
          height: 40px;
          border: 1px solid #ffc485;
          background: #000000;
          cursor: pointer;
          img{
            width: 20px;
            height: 20px;
          }
          p{
            color: #ffc485;
            margin-left: 10px;
            font-weight: 500;
            white-space:nowrap;
          }
        }
        .langSelector{
          position: relative;
          display: flex;
          .btn{
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: space-around;
            width: 100px;
            height: 40px;
            z-index: 10;
            cursor: pointer;
            img{
              width: 20px;
              height: 20px;
            }
            p{
              color: #ffc485;
            }
          }
          .list_on{
            display: none;
            height: 176px;
            position: absolute;
            margin-left: 5px;
            top: 50px;
            width: 132px;
            z-index: 5;
            transition: height .5s;
            overflow: hidden;
            ul{
              flex-direction: column;
              height: 100%;
              border: 1px solid #ffc485;
              background: #000000;
              transition: margin-top .5s;
              display: flex;
              justify-content: center;
              align-items: center;
              list-style: none;
              li{
                padding: 10px 0;
                width: 100%;
                height: 36px;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;
              }
              li.active{
                color: #ffc485;
              }
            }
          }
        }
      }
}
</style>
