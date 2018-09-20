import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import HomePage from './components/HomePage/HomeComponent';
import Exercicio1 from './Exercicios/Exercicio1';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/exercicio-1',
    component: Exercicio1,
  },
];
const router = new VueRouter({routes});

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
