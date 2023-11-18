import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure the correct path to the CSS file

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
