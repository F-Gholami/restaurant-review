import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import useStyles from '../components/styles/Home.style'
import AppBar from './AppBar'
import List from './List'
import Map from './Map.'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'

export default function Home() {
  const classes = useStyles()
  const { showMapInMobileView } = useContext(RestaurantListContext)

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.appBar} square>
            <AppBar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.list} square>
            <List />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper
            className={
              showMapInMobileView
                ? `${classes.mapMobileView} ${classes.map}`
                : classes.map
            }
            square
          >
            <Map />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
