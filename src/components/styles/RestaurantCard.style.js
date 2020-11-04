import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%'
  // },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in',
    '&:hover': {
      backgroundColor: 'lightgray'
    }
  },
  imgPaper: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
}))

export default useStyles
