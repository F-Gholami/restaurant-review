import React, { useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles/RestaurantAccordion.style'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Accordion from '@material-ui/core/Accordion'
import { Box, Button, Paper } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import AddReviewFormDialog from './AddReviewFormDialog'
import PersonIcon from '@material-ui/icons/Person'

export default function RestaurantAccordion({ restaurant }) {
  const classes = useStyles()
  const {
    selectedItem,
    setSelectedItem,
    setHoveredItemId,
    setOpenReviewForm
  } = useContext(RestaurantListContext)

  const handleClickOpen = () => {
    setOpenReviewForm(true)
  }

  const handleOnChange = () => {
    selectedItem && restaurant.place_id === selectedItem.place_id
      ? setSelectedItem(undefined)
      : setSelectedItem(restaurant)
  }

  return (
    <div>
      <Accordion
        className={classes.Accordionroot}
        square
        expanded={
          selectedItem && restaurant.place_id === selectedItem.place_id
            ? true
            : false
        }
        onChange={handleOnChange}
      >
        <AccordionSummary className={classes.AccordionSummaryroot}>
          <div
            className={classes.card}
            elevation={0}
            onMouseEnter={() => setHoveredItemId(restaurant.place_id)}
            onMouseLeave={() => setHoveredItemId(undefined)}
            key={restaurant.place_id}
          >
            <div>
              <Typography variant="h5">{restaurant.restaurantName}</Typography>
              <div
                style={{
                  display: 'flex',
                  padding: 5
                }}
              >
                <Typography
                  variant="body2"
                  style={{ marginRight: 3, color: 'gray' }}
                >
                  {(
                    restaurant.ratings
                      .map((rating) => rating.stars)
                      .reduce((total, num) => {
                        return total + num
                      }) / restaurant.ratings.length
                  )
                    .toFixed(1)
                    .toString()}
                </Typography>
                <Rating
                  precision={0.5}
                  value={restaurant.rating}
                  readOnly
                  size="small"
                />
              </div>
            </div>
            <Paper className={classes.imgPaper} elevation={3}>
              <img src={restaurant.avatar} alt="restaurant" />
            </Paper>
            <Typography style={{ width: '100%' }} variant="body2">
              {restaurant.address}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.AccordionDetailsroot} elevation={0}>
            <div>
              <Button
                // className={AccordionDetailsrootButton}
                style={{ left: '70%', textDecoration: 'underline' }}
                color="primary"
                onClick={handleClickOpen}
                size="small"
              >
                write a review
              </Button>
            </div>
            <div>
              {restaurant.ratings.map((item) => (
                <div className={classes.reviewBox} key={item.user}>
                  <div style={{ display: 'flex' }}>
                    <PersonIcon />
                    <Typography
                      style={{ fontWeight: 'bold', marginLeft: 7 }}
                      variant="body1"
                    >
                      {item.user}
                    </Typography>
                  </div>

                  <Rating
                    precision={0.5}
                    value={item.stars}
                    readOnly
                    size="small"
                    style={{ marginLeft: 20, padding: 7 }}
                  />
                  <Typography
                    style={{ marginLeft: 20, padding: 7, marginBottom: 12 }}
                    variant="body2"
                  >
                    {item.comment}
                  </Typography>
                </div>
              ))}
            </div>
            <AddReviewFormDialog />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
