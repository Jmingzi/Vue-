在入口文件
```js
import Message from 'Message'

Vue.use(Message)
```

即可在全局的组件中使用，示例：

```html
<template> 
    <div class="container">
        ...
    </div>
</template> 

<script>
    export default {
        created () {
            this.$message({
                type: 'info',
                message: '提示:info/success/error'
            })
        }
    }
</script>
```

