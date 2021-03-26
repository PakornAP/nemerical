import './App.css';
import Home from './Home'
import React from 'react'
import Roe from './method/Roe'
import Linear from './method/Liner_AL'
import Interpolate from './method/Interpolate'
import Nav_bar from './nav_bar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Form } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          < Nav_bar />
          <Switch>
            <Route exact path='/' or path='/Home'>
              <Home />
            </Route>
            <Route path='/Roe'>
              <Roe />
            </Route>
            <Route path='/Lin'>
              <Linear />
            </Route>
            <Route path='/In_Ex'>
              <Interpolate />
            </Route>
            {/* {Not found} */}
            <Route>
              <p>NOT FOUND</p>
            </Route>
          </Switch>
        </BrowserRouter>

      </>
    )
  }

}
