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
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 0
    },

    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 3px rgba(0,0,0,0.3)'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'darkgrey',
      outline: '1px solid slategrey'
    }
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
