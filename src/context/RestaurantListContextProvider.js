import React, { createContext, useEffect, useState } from 'react'
import { RestaurantsData } from '../data/RestaurantsData.JSON'

export const RestaurantListContext = createContext({
  list: [],
  setList: () => {},
  filteredList: [],
  setFilteredList: () => {},
  hoveredItemId: undefined,
  setHoveredItemId: () => {},
  selectedItem: undefined,
  setSelectedItem: () => {},
  addReview: (data) => {},
  openReviewForm: false,
  setOpenReviewForm: () => {},
  openNewRestaurantForm: false,
  setOpenNewRestaurantForm: () => {},
  addNewRestaurant: () => {},
  ratingFilterValue: 0,
  setRatingFilterValue: () => {},
  rangeValueToFilter: [],
  setRangeValueToFilter: () => {},
  latsBoundry: [],
  setLatsBoundry: () => {},
  lngsBoundry: [],
  setLngsBoundry: () => {},
  showMapInMobileView: false,
  setShowMapInMobileView: () => {},
  addingNewRestaurantByClickOnMap: false,
  setAddingNewRestaurantByClickOnMap: () => {},
  googleAPIResults: [],
  setGoogleAPIResults: () => {},
  center: {
    lat: 53.3498,
    lng: -6.2603
  },
  setCenter: () => {}
})

export default function RestaurantListContextProvider({ children }) {
  const [list, setList] = useState(RestaurantsData)
  const [filteredList, setFilteredList] = useState(RestaurantsData)
  const [hoveredItemId, setHoveredItemId] = useState(undefined)
  const [selectedItem, setSelectedItem] = useState(undefined)
  const [openReviewForm, setOpenReviewForm] = useState(false)
  const [openNewRestaurantForm, setOpenNewRestaurantForm] = useState(false)
  const [ratingFilterValue, setRatingFilterValue] = useState(0)
  const [rangeValueToFilter, setRangeValueToFilter] = useState([0, 5])
  const [latsBoundry, setLatsBoundry] = useState([])
  const [lngsBoundry, setLngsBoundry] = useState([])
  const [showMapInMobileView, setShowMapInMobileView] = useState(false)
  const [
    addingNewRestaurantByClickOnMap,
    setAddingNewRestaurantByClickOnMap
  ] = useState(false)
  const [googleAPIResults, setGoogleAPIResults] = useState([])
  const [center, setCenter] = useState({
    lat: 53.3498,
    lng: -6.2603
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    }
  }, [])

  useEffect(() => {
    let newFilteredList = list
    if (ratingFilterValue) {
      newFilteredList = newFilteredList.filter(
        (item) => item.rating >= ratingFilterValue
      )
    }

    if (rangeValueToFilter) {
      newFilteredList = newFilteredList.filter(
        (item) =>
          item.rating >= rangeValueToFilter[0] &&
          item.rating <= rangeValueToFilter[1]
      )
    }

    if (latsBoundry.length > 0 && lngsBoundry.length > 0) {
      newFilteredList = newFilteredList.filter(
        (restaurant) =>
          (restaurant.M.lat - latsBoundry[0]) *
            (restaurant.M.lat - latsBoundry[1]) <
            0 &&
          (restaurant.M.lng - lngsBoundry[0]) *
            (restaurant.M.lng - lngsBoundry[1]) <
            0
      )
    }

    setFilteredList([...newFilteredList])
  }, [ratingFilterValue, rangeValueToFilter, latsBoundry, lngsBoundry, list])

  useEffect(() => {
    const radius = 1500

    const controller = new AbortController()

    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=${radius}&type=restaurant&key=AIzaSyAG6vJ37JinDRsOSaP7h7pftZKv3nyDOCY`
    )
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        setGoogleAPIResults(responseJson.results)
      })
      .catch((e) => {})
      .finally(() => {})

    setTimeout(() => {
      controller.abort()
    }, 3000)
  }, [])

  const addReview = (data) => {
    selectedItem.ratings.push(data)
    setSelectedItem({ ...selectedItem })
    let index = list.findIndex(
      (item) => item.place_id === selectedItem.place_id
    )
    list[index] = selectedItem
    setList([...list])
    index = filteredList.findIndex(
      (item) => item.place_id === selectedItem.place_id
    )
    filteredList[index] = selectedItem
    setFilteredList([...filteredList])
  }
  // console.log(list)

  const addNewRestaurant = (data) => {
    // list.push(data)
    setList([...list, data])
  }

  return (
    <RestaurantListContext.Provider
      value={{
        list,
        setList,
        filteredList,
        setFilteredList,
        hoveredItemId,
        setHoveredItemId,
        selectedItem,
        setSelectedItem,
        addReview,
        openReviewForm,
        setOpenReviewForm,
        openNewRestaurantForm,
        setOpenNewRestaurantForm,
        addNewRestaurant,
        ratingFilterValue,
        setRatingFilterValue,
        rangeValueToFilter,
        setRangeValueToFilter,
        latsBoundry,
        setLatsBoundry,
        lngsBoundry,
        setLngsBoundry,
        showMapInMobileView,
        setShowMapInMobileView,
        addingNewRestaurantByClickOnMap,
        setAddingNewRestaurantByClickOnMap,
        googleAPIResults,
        setGoogleAPIResults,
        center,
        setCenter
      }}
    >
      {children}
    </RestaurantListContext.Provider>
  )
}
