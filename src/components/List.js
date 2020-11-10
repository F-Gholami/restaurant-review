import React, { useEffect, useContext, useState, Fragment } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/List.style'
import RestaurantAccordion from '../components/RestaurantAccordion'
import { Divider, Typography } from '@material-ui/core'

export default function List() {
  const classes = useStyles()
  const { filteredList, googleAPIResults } = useContext(RestaurantListContext)

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
          <RestaurantAccordion
            restaurant={restaurant}
            key={restaurant.place_id}
          />
        ))}

      {/* {googleAPIResults.map((restaurant) => (
        // <RestaurantAccordion
        //   restaurant={restaurant}
        //   key={restaurant.place_id}
        // />
        <Fragment>
          <Typography>{restaurant.place_id}</Typography>
          <Typography>{restaurant.name}</Typography>
          <Typography>{restaurant.rating}</Typography>
          <Typography>{restaurant.vicinity}</Typography>
          <Divider />
        </Fragment>
      ))} */}
    </div>
  )
}
