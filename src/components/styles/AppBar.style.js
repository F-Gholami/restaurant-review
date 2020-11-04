import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 30
  },
  sortBox: {
    // alignItems: 'center',
    // justifyContent: 'center'
    textAlign: 'center'
  }
}))

export default useStyles
