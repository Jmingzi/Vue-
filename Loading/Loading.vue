<template>
    <transition name="loading">
        <div v-show="visible"
            class="loading-mask"
            :class="[customClass, { 'is-fullscreen': fullScreen }]">
            <div class="loading-spinner">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                </svg>
                <p v-if="text" class="el-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                text: null,
                fullScreen: true,
                visible: false,
                customClass: ''
            }
        },
        methods: {
            setText (text) {
                this.text = text
            }
        }
    }
</script>

<style lang="scss">
    .loading-mask {
        position: fixed;
        top:0;
        right:0;
        left:0;
        bottom:0;
        background-color: rgba(255,255,255,.9);
        text-align: center;
        color: #22a7f0;
        font-size: 16px;
        z-index: 1111;

        .loading-spinner {
            display: inline-block;
            padding-top: 300px;
        }
        .circular {
            width:42px;
            height:42px;
            animation:loading-rotate 2s linear infinite
        }
        .path{
            animation:loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray:90,150;
            stroke-dashoffset:0;
            stroke-width:2;
            stroke:#20a0ff;
            stroke-linecap:round;
        }
    }
    .loading-enter-active,
    .loading-leave-active {
        transition: all .5s ease;
    }

    .loading-enter,
    .loading-leave-active {
        opacity: 0;
    }

    @keyframes loading-rotate{
        100%{transform:rotate(360deg)}
    }
    @keyframes loading-dash{
        0%{stroke-dasharray:1,200;stroke-dashoffset:0}
        50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}
        100%{stroke-dasharray:90,150;stroke-dashoffset:-120px}
    }
</style>
