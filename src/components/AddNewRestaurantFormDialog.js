import React, { useContext, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import Geocode from 'react-geocode'
import nextId from 'react-id-generator'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
// Geocode.setApiKey('AIzaSyAG6vJ37JinDRsOSaP7h7pftZKv3nyDOCY')

export default function AddNewRestaurantFormDialog({ lat, lng }) {
  const {
    openNewRestaurantForm,
    setOpenNewRestaurantForm,
    addNewRestaurant
  } = useContext(RestaurantListContext)

  const [restaurantName, setRestaurantName] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address
        setAddress(address)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [address])

  const handleClose = () => {
    setOpenNewRestaurantForm(false)
  }

  const handleSubmit = () => {
    const data = {
      place_id: nextId(),
      restaurantName: restaurantName,
      address: address,
      rating: 0,
      ratings: [
        {
          user: '',
          stars: 0,
          comment: ''
        }
      ],
      lat: lat,
      long: lng,
      M: {
        lat: lat,
        lng: lng
      },
      avatar: ''
    }
    addNewRestaurant(data)
    setOpenNewRestaurantForm(false)
  }

  return (
    <div>
      <Dialog
        open={openNewRestaurantForm}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Restaurant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new restaurant, add the name in the fieled then click on
            post
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Restaurant Name"
            multiline
            placeholder="enter name of the restaurant you want to add on the map"
            type="text"
            fullWidth
            value={restaurantName}
            onChange={(event) => setRestaurantName(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            multiline
            type="text"
            fullWidth
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
