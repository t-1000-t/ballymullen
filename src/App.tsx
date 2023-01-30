import * as React from 'react'
import Navigation from './components/Navigation'
import { Route, Switch } from 'react-router'
import { HomeView, NotFoundView, AboutView, ImagesView, VideoView } from './views'
import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/_app.scss'

export const App = () => (
  <div className='wrapperA'>
    <div className='wrapperHT'>
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
    </div>
  </div>
)
