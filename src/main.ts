import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import globalComponent from "@/components"
import router from "@/router";
const app = createApp(App);
// 使用插件
app.use(globalComponent)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
