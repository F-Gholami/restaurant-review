import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6rem'
  },
  formContainer: {
    display: 'flex',
    height: 600
  },
  inputsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem'
    // width: '100%'
  },
  mapContainer: {
    flex: 1
  },
  inputItem: {
    marginTop: 10
    // width: '100%'
    // TextField: {
    //   width: '100%'
    // }
  },
  buttonsContainer: {
    marginTop: 50
  },
  saveButton: {
    marginRight: 6
  }
}))

export default useStyles
