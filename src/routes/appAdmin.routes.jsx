import {Routes, Route} from 'react-router-dom'

import {HomeAdmin} from '../pages/HomeAdmin'
import {MenuAdmin} from '../pages/MenuAdmin'
import {DetailsAdmin} from '../pages/DetailsAdmin'

import {NewPrato} from '../pages/NewPrato'
import {EditPrato} from '../pages/EditPrato'

export function AppRoutesAdmin() {
  return(
    <Routes>
      <Route path='/' element={<HomeAdmin/>}/>
      <Route path='/menu' element={<MenuAdmin/>}/>
      <Route path='/details/:prato_id' element={<DetailsAdmin/>}/>

      <Route path='/new' element={<NewPrato/>}/>
      <Route path='/edit' element={<EditPrato/>}/>

    </Routes>
  )
}