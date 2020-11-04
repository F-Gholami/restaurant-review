import { Button, ButtonBase, Hidden, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/AppBar.style'

export default function AppBar() {
  const classes = useStyles()
  const {
    list,
    setOpen,
    setFilteredList,
    ratingFilterValue,
    setRatingFilterValue,
    showMapInMobileView,
    setShowMapInMobileView,
    setAddingNewRestaurantByClickOnMap
  } = useContext(RestaurantListContext)

  const handleAddNewRestaurantClicked = () => {
    setAddingNewRestaurantByClickOnMap(true)
  }

  return (
    <div className={classes.root}>
      <div>
        <Button color="secondary" onClick={handleAddNewRestaurantClicked}>
          add restaurant
        </Button>
      </div>
      <Hidden mdUp>
        <div>
          <ButtonBase
            onClick={() => setShowMapInMobileView(!showMapInMobileView)}
          >
            {showMapInMobileView ? 'RESTAURANTS' : 'MAP'}
          </ButtonBase>
        </div>
      </Hidden>
      <div className={classes.sortBox}>
        <Typography variant="body1">sort by rating</Typography>
        <Rating
          name="sortBox"
          precision={0.5}
          // controlled
          value={ratingFilterValue}
          onChange={(event, newValue) => {
            setRatingFilterValue(newValue)
          }}
        />
      </div>
    </div>
  )
}
