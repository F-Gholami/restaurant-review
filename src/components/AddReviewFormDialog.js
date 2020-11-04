import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { RestaurantListContext } from '../context/RestaurantListContextProvider'
import { Grid } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

export default function AddReviewFormDialog() {
  const { openReviewForm, setOpenReviewForm, addReview } = useContext(
    RestaurantListContext
  )
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)

  const handleClose = () => {
    setOpenReviewForm(false)
    setName('')
    setDescription('')
    setValue(0)
  }

  const handleSubmit = () => {
    const data = {
      user: name,
      stars: value,
      comment: description
    }
    addReview(data)
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={openReviewForm}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <Grid container direction="column">
            <TextField
              label="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              label="description"
              placeholder="share details of your own experience at this place"
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
          </Grid>
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
