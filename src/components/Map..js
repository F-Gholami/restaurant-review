import React, { useContext, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import useStyles from './styles/Map.style'
import RestaurantLocation from './RestaurantLocation'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import LocationIcon from '@material-ui/icons/LocationOnRounded'
import AddNewRestaurantFormDialog from './AddNewRestaurantFormDialog'
import { Paper, Typography } from '@material-ui/core'

export default function Map() {
  const classes = useStyles()
  const {
    center,
    setCenter,
    filteredList,
    setOpenNewRestaurantForm,
    setLatsBoundry,
    setLngsBoundry,
    addingNewRestaurantByClickOnMap,
    setAddingNewRestaurantByClickOnMap
  } = useContext(RestaurantListContext)

  const [zoom, setzoom] = useState(12)

  const [selectedcoordinates, setSelectedcoordinates] = useState({
    lat: 52.27971937910408,
    lng: 5.4717204296212
  })

  const handleClickOnMap = ({ lat, lng }) => {
    if (addingNewRestaurantByClickOnMap) {
      setSelectedcoordinates({ lat, lng })
      setOpenNewRestaurantForm(true)
      setAddingNewRestaurantByClickOnMap(false)
    }
  }

  const handleChangeMapView = ({ bounds, center }) => {
    const lats = [bounds.ne.lat, bounds.se.lat]
    const lngs = [bounds.ne.lng, bounds.nw.lng]
    setLatsBoundry([...lats])
    setLngsBoundry([...lngs])
    // setCenter({ ...center })
    // console.log(data)
  }

  return (
    <div className={classes.root}>
      <GoogleMapReact
        center={{ ...center }}
        zoom={zoom}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY
          // key: 'AIzaSyAG6vJ37JinDRsOSaP7h7pftZKv3nyDOCY'
        }}
        yesIWantToUseGoogleMapApiInternals
        onChange={handleChangeMapView}
        onClick={handleClickOnMap}
      >
        {filteredList.map((restaurant) => (
          <RestaurantLocation
            key={restaurant.place_id}
            lat={restaurant.M.lat}
            lng={restaurant.M.lng}
            data={restaurant}
          />
        ))}
        <AddNewRestaurantFormDialog
          lat={selectedcoordinates.lat}
          lng={selectedcoordinates.lng}
        />
      </GoogleMapReact>
      {addingNewRestaurantByClickOnMap && (
        <Paper className={classes.addRestaurantNotification}>
          <Typography variant="h4">
            Click on the map to locate a new Reastaurant
          </Typography>
        </Paper>
      )}
    </div>
  )
}
