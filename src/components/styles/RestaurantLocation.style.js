import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  locatorIcon: {
    width: 36,
    transition: 'transform 0.2s ease-in'
  },
  activeLocatorIcon: {
    transform: 'scale(1.5)'
  },
  infoPaper: {
    padding: 10
  }
}))

export default useStyles
