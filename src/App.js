import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainRoute from './routes/MainRoute'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import useStyles from './App.style'
import RestaurantListContextProvider from './context/RestaurantListContextProvider'

const classes = useStyles
function App() {
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <RestaurantListContextProvider>
            <MainRoute />
          </RestaurantListContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
