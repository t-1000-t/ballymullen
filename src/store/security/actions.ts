import { ActionCreator } from 'redux'
import { LOGIN_ACTION, LOGOUT_ACTION } from '.'
import { LoginAction, LogoutAction } from './types'

export const setAuthenticatedUser: ActionCreator<LoginAction> =
  (user: any = {}) => ({
    type: LOGIN_ACTION,
    payload: user,
  })

export const logout: ActionCreator<LogoutAction> = () => ({
  type: LOGOUT_ACTION,
  payload: {},
})
