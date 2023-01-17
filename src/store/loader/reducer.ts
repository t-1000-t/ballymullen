import { Reducer } from 'redux'

import { HIDE_LOADING_OVERLAY, LoaderState, SHOW_LOADING_OVERLAY } from '.'
import { ReducerAction } from '../index'

export const loaderReducer: Reducer<LoaderState> = (
  state: LoaderState = { isLoading: false },
  action: ReducerAction,
) => {
  switch (action.type) {
    case SHOW_LOADING_OVERLAY: {
      return { ...state, isLoading: true }
    }
    case HIDE_LOADING_OVERLAY: {
      return { ...state, isLoading: false }
    }
    default:
      return state
  }
}
