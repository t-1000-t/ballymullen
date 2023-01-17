import { ActionCreator, AnyAction } from 'redux'
import { SHOW_LOADING_OVERLAY, HIDE_LOADING_OVERLAY } from '.'

export const showLoader: ActionCreator<AnyAction> = () => ({ type: SHOW_LOADING_OVERLAY })

export const hideLoader: ActionCreator<AnyAction> = () => ({ type: HIDE_LOADING_OVERLAY })
