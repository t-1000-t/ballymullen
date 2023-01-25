import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import { Route, Switch } from 'react-router'
import { HomeView, NotFoundView, AboutView, ImagesView, VideoView } from './views'

export const App = () => (
  <div className='container'>
    <Navigation />

    <Switch>
      <Route exact path='/'>
        <HomeView />
      </Route>

      <Route path='/about'>
        <AboutView />
      </Route>

      <Route path='/images/'>
        <ImagesView />
      </Route>

      <Route path='/videos'>
        <VideoView />
      </Route>

      <Route>
        <NotFoundView />
      </Route>
    </Switch>
  </div>
)
