import Vue from 'vue'
import {
    Message,
    Row,
    Col,
    Button,
    Loading
} from "element-ui"

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
