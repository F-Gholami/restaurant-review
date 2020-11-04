import { Divider, Grid } from '@material-ui/core'
import React, { Fragment, useContext } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/List.style'
import RestaurantAccordion from '../components/RestaurantAccordion'

export default function List() {
  const classes = useStyles()
  const { filteredList } = useContext(RestaurantListContext)

  return (
    // <Grid className={classes.root} container direction="column">
    //   {filteredList.map((restaurant) => (
    //     <Fragment key={restaurant.id}>
    //       <RestaurantCard restaurant={restaurant} />
    //       <Divider />
    //     </Fragment>
    //   ))}
    //   <RestaurantDetails />
    // </Grid>
    // <RestaurantAccordion />
    <div className={classes.root}>
      {filteredList
        .sort((a, b) => b.rating - a.rating)
        .map((restaurant) => (
          <RestaurantAccordion restaurant={restaurant} key={restaurant.id} />
        ))}
    </div>
  )
}
