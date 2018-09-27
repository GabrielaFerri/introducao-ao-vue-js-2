import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import HomePage from './components/HomePage/HomeComponent';
import Exercicio1 from './Exercicios/Exercicio1';
import Exercicio2 from './Exercicios/Exercicio2';
import FormularioComponent from './components/Formulario/FormularioComponent';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/exercicio-1',
    component: Exercicio1,
  },
  {
    path: '/exercicio-2',
    component: Exercicio2,
  },
  {
    path: '/formulario-component',
    component: FormularioComponent,
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
