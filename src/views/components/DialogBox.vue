<template>
<div class="modal" v-if="modal">
    <div class="gameDetail">
        <img src="@/assets/modal/cancel.png" @click="modal = !modal"/>
        <div class="gameDetail_content">
            <img :src="require(`@/assets/games/${name}.png`)" alt=“icon”/>
            <div class="info">
                <p class="title">{{ Title }}</p>
                <span>{{ Content }}</span>
                <span>{{ Intro }}</span>
                <div class="btn">
                    <img src="@/assets/anchor.png"/>
                    <p class="play">PLAY</p>
                    <img src="@/assets/anchor.png"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'DialogBox',
  components: {},
  setup () {
    const modal = ref(false)
    return { modal }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.modal {
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
    background-color: $modal;
    z-index: 20;
    .gameDetail {
        display: flex;
        justify-content: normal;
        align-items: normal;
        flex-direction: column;
        padding: 0 15px;
        max-width: 768px;
        max-height: auto;
        max-height: 400px;
        width: 90%;
        border-radius: 20px;
        border: 2px solid $sky_blue;
        background: $black-80;
        img {
            margin: 10px 10px 0 auto;
            width: 48px;
            height: 48px;
            cursor: pointer;
        }
        .gameDetail_content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 25px 25px;
            height: 100%;
            img {
                width: 300px;
                height: 300px;
                margin-bottom: 0;
            }
            .info {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                flex-direction: column;
                padding: 35px 0 0 50px;
                height: 300px;
                .title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    width: 100%;
                    color: $white;
                }
                span {
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 20px;
                    color: $white;
                }
                .btn {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin: 30px 0 0;
                    margin-top: auto;
                    width: 160px;
                    height: 42px;
                    border: 1px solid $sky_blue;
                    border-radius: 50px;
                    background: $black-50;
                    cursor: pointer;
                    }
                    img:first-child {
                        transform: rotate(180deg);
                    }
                    img {
                        margin: 0;
                        height: 25px;
                        width: 25px;
                    }
                    .play {
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
