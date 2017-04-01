<template>
    <transition name="message-fade">
        <div class="message"
            :class="customClass"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer">
            <!--<img class="el-message__img" :src="typeImg" alt="" v-if="!iconClass">-->
            <div class="message__group">
                <p><i class="message__icon" :class="iconClass" v-if="iconClass"></i>{{ message }}</p>
                <div v-if="showClose" class="message__closeBtn icon-close" @click="close"></div>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                visible: false,
                message: '',
                duration: 3000,
                type: 'info',
                iconClass: '',
                onClose: null,
                showClose: false,
                closed: false,
                timer: null
            }
        },
        computed: {
            customClass () {
                return this.type
            }
        },
        watch: {
            closed (newVal) {
                if (newVal) {
                    this.visible = false
                    this.$el.addEventListener('transitionend', this.destroyElement)
                }
            }
        },
        methods: {
            destroyElement () {
                this.$el.removeEventListener('transitionend', this.destroyElement)
                this.$destroy(true)
                this.$el.parentNode.removeChild(this.$el)
            },

            close () {
                this.closed = true
                if (typeof this.onClose === 'function') {
                    this.onClose(this)
                }
            },

            clearTimer () {
                clearTimeout(this.timer)
            },

            startTimer () {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close()
                        }
                    }, this.duration)
                }
            }
        },
        mounted () {
            this.startTimer()
        }
    }
</script>

<style lang="scss">
    .message {
        position: fixed;
        top: 30px;
        width: 100%;
        text-align: center;
        .message__group {
            display: inline-block;
            padding: 10px;
            border-width: 1px;
            border-style: solid;
            border-radius: 5px;
        }
        &.info .message__group {
            background-color: lightblue;
            color: #22a7f0;
            border-color: #22a7f0;
        }
        &.success .message__group {
            background-color: lightgreen;
            color: green;
            border-color: green;
        }
        &.error .message__group {
            background-color: lightpink;
            color: red;
            border-color: red;
        }
    }

    .message-fade-enter-active,
    .message-fade-leave-active {
        transition: all .5s ease;
    }

    .message-fade-enter,
    .message-fade-leave-active {
        opacity: 0;
        transform: translateY(-100%);
    }
</style>
