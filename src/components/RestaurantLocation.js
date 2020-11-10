import { Paper, Tooltip, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext } from 'react'
import RestaurantLocationIcon from '../assets/restaurant.svg'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import useStyles from './styles/RestaurantLocation.style'

export default function RestaurantLocation({ data }) {
  const classes = useStyles()
  const { hoveredItemId } = useContext(RestaurantListContext)

  return (
    <div>
      <Tooltip
        title={
          <div className={classes.infoPaper}>
            <Typography variant="body1">{data.restaurantName}</Typography>
            <Rating value={data.rating} readOnly size="small" />
            <Typography variant="body2">{data.address}</Typography>
          </div>
        }
        placement="top"
        arrow
      >
        <img
          className={
            data.place_id === hoveredItemId
              ? `${classes.locatorIcon} ${classes.activeLocatorIcon}`
              : classes.locatorIcon
          }
          src={RestaurantLocationIcon}
        />
      </Tooltip>
    </div>
  )
}
