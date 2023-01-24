import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Route, Switch } from 'react-router'
import { HomeView, NotFoundView, AboutView } from './views'

export const App = () => (
  <div className='container'>
    <Navigation />

    <Switch>
      <Route path='/' exact>
        <HomeView />
      </Route>

      <Route path='/about'>
        <AboutView />
      </Route>

      <Route>
        <NotFoundView />
      </Route>
    </Switch>
  </div>
)
