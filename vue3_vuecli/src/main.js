// 引入不再是 vue 的构造函数， 引入的是一个名为createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
