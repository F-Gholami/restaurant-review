import React, { useState } from 'react'
import useStyles from './styles/AddNewRestaurant.style'
import { TextField, Button, Paper } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import LocationIcon from '@material-ui/icons/LocationOnRounded'
import { useHistory } from 'react-router-dom'

export default function AddNewRestaurant() {
  const classes = useStyles()
  const history = useHistory()
  const [center, setCenter] = useState({
    lat: 53.3498,
    lng: -6.2603
  })
  const [zoom, setZoom] = useState(12)
  const [selectedcoordinates, setSelectedcoordinates] = useState({
    lat: 52.27971937910408,
    lng: 5.4717204296212
  })
  const [resaurantName, setresaurantName] = useState('')
  const [address, setAddress] = useState('')

  const handleClickOnMap = ({ lat, lng }) => {
    setSelectedcoordinates({ lat, lng })
  }

  const onSaveClicked = () => {
    // save new restaurant
  }

  const onCancelClicked = () => {
    history.push('/restaurants')
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.inputsContainer}>
          <div className={classes.inputItem}>
            <TextField
              style={{ width: '100%' }}
              label="Restaurant Name"
              placeholder="Enter the restaurant name..."
              value={resaurantName}
              onChange={(event) => setresaurantName(event.target.value)}
            />
          </div>
          <div className={classes.inputItem}>
            <TextField
              style={{ width: '100%' }}
              label="Address"
              placeholder="152, street name, city"
              multiline
              rows={4}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              style={{ margin: 20, width: 120 }}
              color="primary"
              className={classes.saveButton}
              onClick={onSaveClicked}
            >
              Save
            </Button>
            <Button
              style={{ margin: 20, width: 120 }}
              variant="contained"
              color="secondary"
              onClick={onCancelClicked}
            >
              Cancel
            </Button>
          </div>
        </div>
        <Paper className={classes.mapContainer} elevation={3}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={handleClickOnMap}
          >
            <LocationIcon
              lat={selectedcoordinates.lat}
              lng={selectedcoordinates.lng}
            />
          </GoogleMapReact>
        </Paper>
      </div>
    </div>
  )
}
