import YEditor from '@/components/Editor/index.vue'

import { Plugin } from 'vue'
const VueEditor: Plugin = {
  install(app) {
    app.component('YEditor', YEditor)
  }
}
export { YEditor }
export default VueEditor