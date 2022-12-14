import React from 'react'
import logo from 'logo.svg'
import 'App.css'
import { Header} from './components'

export const App = () => (
  <div className='App'>
    <Header />
    <header className='App-header'>
      THIS VERSION REACT-18 FOR CORRECTLY Eslint!
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
    </header>
  </div>
)

export default App
