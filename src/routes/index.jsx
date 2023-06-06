import {BrowserRouter} from 'react-router-dom'

import {AppRoutes} from './app.routes'
import {AuthRoutes} from './auth.routes'
import {AppRoutesAdmin} from './appAdmin.routes'

export function Routes() {
  return(
    <BrowserRouter>
      <AppRoutesAdmin/>
    </BrowserRouter>
  )
}