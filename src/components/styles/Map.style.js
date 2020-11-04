import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  addRestaurantNotification: {
    position: 'absolute',
    zIndex: 100,
    top: 8,
    left: 8,
    padding: '0.5rem'
  }
}))

export default useStyles
