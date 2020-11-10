import {
  Button,
  ButtonBase,
  Hidden,
  Slider,
  Typography
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext, useState } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/AppBar.style'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const valuetext = (value) => {
  return `${value}°C`
}

export default function AppBar() {
  const classes = useStyles()
  const {
    ratingFilterValue,
    setRatingFilterValue,
    rangeValueToFilter,
    setRangeValueToFilter,
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
        <Button color="primary" onClick={handleAddNewRestaurantClicked}>
          add a restaurant
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
      <div className={classes.rangeBox}>
        <Typography id="range-slider" gutterBottom>
          Rating range
        </Typography>
        <Slider
          value={rangeValueToFilter}
          onChange={(event, newValue) => setRangeValueToFilter(newValue)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0}
          max={5}
          step={0.5}
        />
      </div>
      {/* <div>
        <FormControl style={{ minWidth: 170 }}>
          <InputLabel id="demo-controlled-open-select-label">sort</InputLabel>

          <Select
            value={ratingFilterValue}
            onChange={(event) => setRatingFilterValue(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>one-star</MenuItem>
            <MenuItem value={2}>two-stars</MenuItem>
            <MenuItem value={3}>three-stars</MenuItem>
            <MenuItem value={4}>four-stars</MenuItem>
            <MenuItem value={5}>five-stars</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      {/* <div className={classes.sortBox}>
        <Typography variant="body1">sort by rating</Typography>
        <Rating
          name="sortBox"
          precision={0.5}
          value={ratingFilterValue}
          onChange={(event, newValue) => {
            setRatingFilterValue(newValue)
          }}
        />
      </div> */}
    </div>
  )
}
