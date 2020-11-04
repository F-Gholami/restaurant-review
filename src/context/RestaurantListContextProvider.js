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
  latsBoundry: [],
  setLatsBoundry: () => {},
  lngsBoundry: [],
  setLngsBoundry: () => {},
  showMapInMobileView: false,
  setShowMapInMobileView: () => {},
  addingNewRestaurantByClickOnMap: false,
  setAddingNewRestaurantByClickOnMap: () => {}
})

export default function RestaurantListContextProvider({ children }) {
  const [list, setList] = useState(RestaurantsData)
  const [filteredList, setFilteredList] = useState(RestaurantsData)
  const [hoveredItemId, setHoveredItemId] = useState(undefined)
  const [selectedItem, setSelectedItem] = useState(undefined)
  const [openReviewForm, setOpenReviewForm] = useState(false)
  const [openNewRestaurantForm, setOpenNewRestaurantForm] = useState(false)
  const [ratingFilterValue, setRatingFilterValue] = useState(0)
  const [latsBoundry, setLatsBoundry] = useState([])
  const [lngsBoundry, setLngsBoundry] = useState([])
  const [showMapInMobileView, setShowMapInMobileView] = useState(false)
  const [
    addingNewRestaurantByClickOnMap,
    setAddingNewRestaurantByClickOnMap
  ] = useState(false)

  useEffect(() => {
    let newFilteredList = list
    if (ratingFilterValue) {
      newFilteredList = newFilteredList.filter(
        (item) => item.rating >= ratingFilterValue
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
  }, [ratingFilterValue, latsBoundry, lngsBoundry, list])

  const addReview = (data) => {
    selectedItem.ratings.push(data)
    setSelectedItem({ ...selectedItem })
    let index = list.findIndex((item) => item.id === selectedItem.id)
    list[index] = selectedItem
    setList([...list])
    index = filteredList.findIndex((item) => item.id === selectedItem.id)
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
        latsBoundry,
        setLatsBoundry,
        lngsBoundry,
        setLngsBoundry,
        showMapInMobileView,
        setShowMapInMobileView,
        addingNewRestaurantByClickOnMap,
        setAddingNewRestaurantByClickOnMap
      }}
    >
      {children}
    </RestaurantListContext.Provider>
  )
}
