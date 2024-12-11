import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './app.scss'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    list:[
      {
        id:1,
        title: "Lavar a calça",
        description: "loren ipsin",
        priority: "low",
        completed: false
      },
      {
        id:2,
        title: "Lavar a rua",
        description: "loren ipsin",
        priority: "medium",
        completed: true
      },
      {
        id:3,
        title: "Estudar",
        description: "loren ipsin",
        priority: "high",
        completed: false
      }
    ]
  },
  mutations: {
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}},
    deleteItem (state, item) {
      const index =  state.list.findIndex(e => e.id === item.id)
      if (index !== -1) {
        state.list.splice(index, 1)
      }
    },
    saveItem(state, item) {
      if (!item.id) {
        item.id = Math.floor(Math.random() * 100000)
        state.list.push(item)
        return;
      }
      const index =  state.list.findIndex(e => e.id === item.id)
      if (index !== -1) {
        state.list.splice(index, 1, item)
      }
    }
  }, 
  getters: {
    // Retorna a lista filtrada de acordo com os parâmetros
    filteredList(state) {
      return (completed, priority) => {
        let filtered = state.list;

        // Filtrar por 'priority'
        if (priority !== 'all') {
          filtered = filtered.filter(item => item.priority === priority);
        }

        return filtered;
      };
    }
  }
})
 

new Vue({
  render: h => h(App),
  store: store,

	beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  

}).$mount('#app')

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});


