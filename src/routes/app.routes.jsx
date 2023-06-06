import {Routes, Route} from 'react-router-dom'

import {HomeUser} from '../pages/HomeUser'
import {MenuUser} from '../pages/MenuUser'
import {DetailsUser} from '../pages/DetailsUser'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<HomeUser/>}/>
      <Route path='/menu' element={<MenuUser/>}/>
      <Route path='/details/:prato_id' element={<DetailsUser/>}/>
    </Routes>
  )
}