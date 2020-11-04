import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles/RestaurantAccordion.style'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Accordion from '@material-ui/core/Accordion'
import { Box, Button, Paper } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import AddReviewFormDialog from './AddReviewFormDialog'

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
    selectedItem && restaurant.id === selectedItem.id
      ? setSelectedItem(undefined)
      : setSelectedItem(restaurant)
  }

  return (
    <div>
      <Accordion
        className={classes.Accordionroot}
        square
        expanded={
          selectedItem && restaurant.id === selectedItem.id ? true : false
        }
        onChange={handleOnChange}
      >
        <AccordionSummary className={classes.AccordionSummaryroot}>
          <Paper
            className={classes.card}
            elevation={0}
            onMouseEnter={() => setHoveredItemId(restaurant.id)}
            onMouseLeave={() => setHoveredItemId(undefined)}
            key={restaurant.id}
          >
            <div>
              <Typography variant="h5">{restaurant.restaurantName}</Typography>
              <div
                style={{
                  display: 'flex',
                  padding: 5,
                  justifyContent: 'space-between'
                }}
              >
                <Typography
                  variant="body2"
                  style={{ marginRight: 3, color: 'gray' }}
                >
                  {restaurant.rating}
                </Typography>{' '}
                <Rating
                  precision={0.5}
                  value={restaurant.rating}
                  readOnly
                  size="small"
                />
                <a href="#">reviews</a>
              </div>
            </div>
            <Paper className={classes.imgPaper} elevation={3}>
              <img src={restaurant.avatar} />
            </Paper>
            <Typography style={{ width: '100%' }} variant="body2">
              {restaurant.address}
            </Typography>
          </Paper>
        </AccordionSummary>
        <AccordionDetails className={classes.AccordionDetailsroot}>
          <div className={classes.root} elevation={0}>
            <div>
              {restaurant.ratings.map((item) => (
                <div className={classes.reviewBox} key={item.user}>
                  <Box m={1}>
                    <Typography variant="body1">{item.user}</Typography>
                  </Box>
                  <Rating
                    precision={0.5}
                    value={restaurant.rating}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2">{item.comment}</Typography>
                </div>
              ))}
            </div>
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                write a review
              </Button>
            </div>
            <AddReviewFormDialog />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
