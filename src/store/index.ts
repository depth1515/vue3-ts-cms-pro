import { createStore } from 'vuex'
import { IState } from '@/store/types'
import login from '@/store/login/login'

const store = createStore<IState>({
  state() {
    return {
      name: 'asd',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
