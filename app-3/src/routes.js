import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Berries from './components/Berry'
import BerryList from './components/BerryList'

export default (
  <Switch>
    <Route exact path="/" component={BerryList}/>
    <Route path="/berry/:name" component={Berries}/>
  </Switch>
)