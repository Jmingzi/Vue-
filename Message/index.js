import Message from './Message.vue'

let seed = 1
let zIndex = 0

function install (Vue) {
    Vue.prototype.$message = function (options = {}) {
        options.onClose = function () {
            console.log('close')
        }
        let id = 'message_' + seed++
        let MessageConstructor = Vue.extend(Message)
        let instance = new MessageConstructor({
            data: options
        })
        instance.id = id
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.vm.visible = true
        instance.dom = instance.vm.$el
        instance.dom.style.zIndex = zIndex++
        // instances.push(instance)
        return instance.vm
    }
}

export default install
