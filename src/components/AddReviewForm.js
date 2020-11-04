import { Button, Grid, TextField } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React, { useContext, useState } from 'react'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'

export default function AddReviewForm() {
  const { addReview } = useContext(RestaurantListContext)
  const [value, setValue] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const data = {
      user: name,
      stars: value,
      comment: description
    }
    addReview(data)
  }

  return (
    <Grid container direction="column">
      <TextField
        label="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="description"
        placeholder="enter your description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        multiline
        rows={4}
        variant="outlined"
      />
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
      <Button onClick={handleSubmit}>submit</Button>
    </Grid>
  )
}
//UPDATE RATINGS AFTER ADDING A NEW REVIEW
// ratings.map (r => r.stars).reduce((total, number) => total + number)/ratings.length
