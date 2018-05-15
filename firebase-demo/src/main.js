import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

var config = {
  apiKey: 'AIzaSyCp2y5Ln5nTAu5HSti-Kx1yI3fBJMjkT9w',
  authDomain: 'vuejs-http-7bd9f.firebaseapp.com',
  databaseURL: 'https://vuejs-http-7bd9f.firebaseio.com',
  projectId: 'vuejs-http-7bd9f',
  storageBucket: 'vuejs-http-7bd9f.appspot.com',
  messagingSenderId: '680387792617'
}

let app

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
