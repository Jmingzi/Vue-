在入口文件
```js
import Loading from 'Loading'

Vue.use(Loading)
```

即可在全局的组件中使用，示例：

```html
<template> 
    <div class="container" v-loading="loadingVisiable" loading-text="加载中...">
        ...
    </div>
</template> 

<script>
    export default {
        data () {
            return {
                loadingVisiable: true
            }
        }
    }
</script>
```

