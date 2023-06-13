import React from 'react'
import ReactDOM from 'react-dom/client'


import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'

import { Mycontext } from './mycontext'

import {Routes} from './routes'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles/>
      <Mycontext.Provider value={{email: 'giakomogcs@gmail.com'}}>
        <Routes />
      </Mycontext.Provider>
      
    </ThemeProvider>
  </React.StrictMode>,
)