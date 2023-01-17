import { History } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { Action, applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ApplicationState, reducers } from '.'

type unknownObject = Record<string, unknown>

export default function configureStore(
  history: History,
  initialState: ApplicationState,
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const middleware = [routerMiddleware(history), thunk]

  return createStore<ApplicationState, Action, unknownObject, unknownObject>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  )
}
