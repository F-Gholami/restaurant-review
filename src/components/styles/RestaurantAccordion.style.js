import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  Accordionroot: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  AccordionDetailsroot: {
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: 'lightGray'
  },
  AccordionSummaryroot: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in',
    '&:hover': {
      backgroundColor: 'lightgray'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row'
    }
  },
  imgPaper: {
    width: 100,
    height: 100,
    marginBottom: 10,
    '& img': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: '5%'
    },
    [theme.breakpoints.down('xs')]: {
      position: 'unset',
      right: 'unset'
    }
  },
  reviewBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5
  }
}))

export default useStyles
