import { Paper, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext, useState } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/RestaurantCard.style'

export default function RestaurantCard({ restaurant }) {
  const classes = useStyles()
  const { setHoveredItemId, setSelectedItem } = useContext(
    RestaurantListContext
  )

  return (
    <Paper
      className={classes.card}
      elevation={0}
      onMouseEnter={() => setHoveredItemId(restaurant.id)}
      onMouseLeave={() => setHoveredItemId(undefined)}
      onClick={() => setSelectedItem(restaurant)}
    >
      <div>
        <Typography variant="h5">{restaurant.restaurantName}</Typography>
        <Rating value={restaurant.rating} readOnly />
      </div>
      <Paper className={classes.imgPaper} elevation={3}></Paper>
      <Typography variant="body2">{restaurant.address}</Typography>
    </Paper>
  )
}
