import vRequest from '../../index'

import { IAccount, ILoginResult, IDataType } from './type'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = `/role/`
}

export function loginRequest(account: IAccount) {
  return vRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return vRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return vRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
