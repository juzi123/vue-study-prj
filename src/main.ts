import Vue from "vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Antd);
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
