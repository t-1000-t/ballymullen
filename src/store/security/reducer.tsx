import { Reducer } from 'redux'
import { User } from '../../models'
// import { ReducerAction } from '../index'
import { LOGIN_ACTION, LOGOUT_ACTION } from './types'
import { ReducerAction } from '../index'

export const authReducer: Reducer<User> = (state: User = {} as User, action: ReducerAction) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return action.payload
    case LOGOUT_ACTION:
      return {} as User

    default:
      return state
  }
}
