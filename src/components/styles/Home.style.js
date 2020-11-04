import { makeStyles } from '@material-ui/core/styles'

const appBarHeight = 70

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    height: appBarHeight,
    backgroundColor: '#f1f3f4'
  },
  list: {
    height: `calc(100vh - ${appBarHeight}px)`,
    overflow: 'auto'
  },
  map: {
    height: `calc(100vh - ${appBarHeight}px)`,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      zIndex: -1,
      top: appBarHeight,
      left: 0,
      width: '100%'
    }
  },
  mapMobileView: {
    [theme.breakpoints.down('sm')]: {
      zIndex: 1000
    }
  }
}))

export default useStyles
