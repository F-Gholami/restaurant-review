// import { Switch } from '@material-ui/core'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AddNewRestaurant from '../components/AddNewRestaurant'
import Map from '../components/Map.'
import HomeScreen from '../screens/HomeScreen'

export default function MainRoute() {
  return (
    <>
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/add-new-restaurant">
          <AddNewRestaurant />
        </Route>
        <Route path="/restaurants">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="restaurants" />
        </Route>
      </Switch>
    </>
  )
}
