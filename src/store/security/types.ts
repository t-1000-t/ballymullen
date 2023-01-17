import { AnyAction } from 'redux'
import { User } from '../../models'

export const LOGIN_ACTION = 'LOGIN'
export const LOGOUT_ACTION = 'LOGOUT'

export interface LoginAction extends AnyAction {
  type: typeof LOGIN_ACTION
  payload: {
    user: User
  }
}

export interface LogoutAction extends AnyAction {
  type: typeof LOGOUT_ACTION
  payload: Record<string, unknown>
}
