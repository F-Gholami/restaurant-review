import { Paper, Slide, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import AddReviewForm from './AddReviewForm'
import useStyles from './styles/RestaurantDetails.style'

export default function RestaurantDetails() {
  const classes = useStyles()
  const { selectedItem } = useContext(RestaurantListContext)

  if (!selectedItem) {
    return null
  }

  return (
    // <Slide direction="up" in={selectedItem}>
    //   <Paper className={classes.root}>
    //     <Typography variant="h3">{selectedItem.restaurantName}</Typography>
    //     <AddReviewForm />
    //   </Paper>
    // </Slide>
    <Paper className={classes.root}>
      <Typography variant="h3">{selectedItem.restaurantName}</Typography>
      <AddReviewForm />
    </Paper>
  )
}
