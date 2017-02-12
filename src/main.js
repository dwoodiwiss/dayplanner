import Vue from 'vue'
import App from './App.vue'
import Credits from './components/Credits.vue'
import Setup from './components/Setup.vue'

new Vue({
  el: '#setup',
  render: h => h(Setup)
})

new Vue({
  el: '#credits',
  render: h => h(Credits)
})

// Vue.component('credits', {
//   template: '<div>A custom component!</div>'
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
