import { LoginAccount, LoginData, LoginResult } from '@/service/login/types'
import { request } from '@/service'

enum LoginAPI {
  login = '/login',
  user = '/users/',
  // --- 权限---
  role = '/role/',
  menu = '/menu'
  // --------
}

const login = (account: LoginAccount) => {
  return request.post<LoginResult<LoginData>>({
    url: LoginAPI.login,
    data: account
  })
}

const user = (id: number) => {
  return request.get<LoginResult>({
    url: LoginAPI.user + id
  })
}

const roles = (id: number) => {
  return request.get<LoginResult>({
    url: LoginAPI.role + id + LoginAPI.menu
  })
}

export { login, user, roles }
