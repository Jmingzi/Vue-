import Loading from './Loading.vue'
import Vue from 'vue'
let Mask = Vue.extend(Loading)

function install (Vue) {
    Vue.directive('loading', {
        bind: function (el, binding) {
            // console.log(binding)
            let mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: el.getAttribute('loading-text'),
                    fullScreen: !!binding.modifiers.fullscreen
                }
            })
            el.instance = mask
            el.mask = mask.$el
            // el.maskStyle = {
            //     originPosition: window.getComputedStyle(el, null).position
            // }
            // let t = window.getComputedStyle(el, null)
            // el.style.position = 'relative'
            // if (binding.modifiers.fullscreen) {
            //     document.body.appendChild(el.mask)
            // } else {
            //     el.appendChild(el.mask)
            // }
            document.body.appendChild(el.mask)
            el.instance.visible = binding.value
        },
        update: function (el, binding) {
            if (binding.oldValue !== binding.value) {
                el.instance.visible = binding.value
                document.documentElement.style.overflow = binding.value ? 'hidden' : ''
            }
        },
        unbind: function (el, binding) {
            document.documentElement.style.overflow = ''
            document.body.removeChild(el.mask)
        }
    })
}

export default install
