import React from 'react'
import ReactDOM from 'react-dom/client'

import {DetailsUser} from './pages/DetailsUser'
import {DetailsAdmin} from './pages/DetailsAdmin'

import {HomeUser} from './pages/HomeUser'
import {HomeAdmin} from './pages/HomeAdmin'

import {MenuAdmin} from './pages/MenuAdmin'
import {MenuUser} from './pages/MenuUser'

import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'

import {NewPrato} from './pages/NewPrato'
import {EditPrato} from './pages/EditPrato'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles/>
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>,
)