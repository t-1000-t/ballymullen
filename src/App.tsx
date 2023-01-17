import React from 'react'
import { Portal } from './components/Portal'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store'
// import { store } from 'store'
// import { ProvideAuth, NavigationRouting } from '.'

// import 'react-toastify/dist/ReactToastify.css'

export const App = () => (
  <>
    <Portal>
      <ToastContainer icon={false} />
    </Portal>
    <Provider store={store}>
      {/* <ProvideAuth> */}
      {/* <NavigationRouting /> */}
      {/* </ProvideAuth> */}
    </Provider>
    !!!!!
  </>
)
