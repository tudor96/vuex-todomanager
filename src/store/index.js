import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//Load vuex into vue
Vue.use(Vuex);

// Define store modules

export default new Vuex.Store({
  modules: {
    todos,
  },
});
