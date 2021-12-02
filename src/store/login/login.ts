import { Module } from 'vuex'
import { ILoginState } from '@/store/login/types'
import { IState } from '@/store/types'
import { login, roles, user } from '@/service/login/login'
import { LoginAccount } from '@/service/login/types'
import cache from '@/utils/cache'
import { router } from '@/router'
import { mapRoutes } from '@/utils/asyncRouter'

const loginModule: Module<ILoginState, IState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus

      const routes = mapRoutes(userMenus)
      routes.forEach((i) => {
        router.addRoute('main', i)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: LoginAccount) {
      //  实现登录逻辑
      const loginResult = await login(payload)
      const {
        data: { id, token }
      } = loginResult
      cache.setCache('token', token)
      commit('changeToken', token)
      const { data: userInfo } = await user(id)
      cache.setCache('userInfo', userInfo)

      const { data: userMenus } = await roles(userInfo.role.id)
      commit('changeUserMenus', userMenus)
      cache.setCache('userMenus', userMenus)

      await router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = cache.getCache('token')
      token && commit('changeToken', token)
      const userInfo = cache.getCache('userInfo')
      userInfo && commit('changeUserInfo', userInfo)
      const userMenus = cache.getCache('userMenus')
      userMenus && commit('changeUserMenus', userMenus)
    }
  }
}

export default loginModule
