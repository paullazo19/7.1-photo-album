import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Albums from './modules/Albums'
import Album from './modules/Album'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/albums/:title" component={Albums}>
        <Route path="/albums/:title/:photos" component={Album}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
