import { PayloadAction } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'

import { AnyAction, combineReducers, Reducer } from 'redux'
// import { administrationReducer, AdministrationState } from './administration'
import configureStore from './configureStore'
// import { dictionariesReducer, DictionariesState } from './dictionaries'
// import { estimateReducer, EstimateState } from './estimate'
// import { projectReducer, ProjectState } from './project'
// import { loaderReducer, LoaderState } from './loader'
// import { authReducer } from './security'
import { LoaderState, loaderReducer } from './loader'
import { User } from '../models'
import { authReducer } from './security'

// import { sidebarReducer, SidebarState } from './sidebar'

// ApplicationState Initialization
export interface ApplicationState {
  // administration: AdministrationState
  authUser: User
  // sidebar: SidebarState
  loader: LoaderState
  // estimate: EstimateState
  // project: ProjectState
  // dictionaries: DictionariesState
}

export type ReducerAction = AnyAction | PayloadAction

const appState = {} as ApplicationState

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  // administration: administrationReducer,
  authUser: authReducer,
  // sidebar: sidebarReducer,
  loader: loaderReducer,
  // estimate: estimateReducer,
  // project: projectReducer,
  // dictionaries: dictionariesReducer,
})

export const store = configureStore(createBrowserHistory(), appState)
