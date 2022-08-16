import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import login from './login/login'

import { IRootState, IStoreType } from './types'

export const store = createStore<IRootState>({
  state: () => ({
    name: 'Liu',
    age: 18
  }),
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

export const key: InjectionKey<Store<IStoreType>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}
