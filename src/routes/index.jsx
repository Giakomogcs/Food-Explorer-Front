import {BrowserRouter} from 'react-router-dom'

import {useAuth} from "../hooks/auth"

import {AppRoutes} from './app.routes'
import {AuthRoutes} from './auth.routes'
import {AppRoutesAdmin} from './appAdmin.routes'

export function Routes() {

  const {user} = useAuth()

  let Route = <AuthRoutes/>

  if (!user) {
    Route = <AuthRoutes/>
  }

  if (user && user.isAdmin){
    Route = <AppRoutesAdmin/>
  }

  if (user && !user.isAdmin){
    Route = <AppRoutes/>
  }

  return(
    <BrowserRouter>
      {Route}
    </BrowserRouter>
  )
}