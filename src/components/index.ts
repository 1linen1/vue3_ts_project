import SvgIcon from "@/components/SvgIcon/index.vue"
import {Component, App} from "vue";

// '[name: string]'表示该allComponent的key必须能赋值给 string类型（可以转换成string）
const allComponents: {[name:string]: Component} = {
  SvgIcon
}

export default {
  install(app:App , options) {
    // 注册需要注册的全局组件
    Object.keys(allComponents).forEach((key:string) => app.component(key, allComponents[key]))
  }
}