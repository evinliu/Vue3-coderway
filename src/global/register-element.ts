import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElTabPane,
  ElTabs,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain
} from 'element-plus'

const components = [
  ElAlert,
  ElButton,
  ElAside,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
