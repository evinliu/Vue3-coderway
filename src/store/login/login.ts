import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import router from '@/router'

import { IAccount } from '@/service/request/login/type'
import {
  loginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/request/login/login'
import localCache from '@/utils/localCache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      // 请求token
      const result = await loginRequest(payload)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.set('token', token)
      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.set('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.set('userMenus', userMenus)

      // 跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.get('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.get('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.get('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
