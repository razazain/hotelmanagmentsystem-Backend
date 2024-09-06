import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Adminpanel/Pages/Dashboard'
import GuestUser from './Adminpanel/Pages/GuestUser'
import AddGuest from './Adminpanel/Pages/addGuest'
import EditGuest from './Adminpanel/Pages/editGuest'
import AdminUser from './Adminpanel/Pages/AdminUser'
import EditAdmin from './Adminpanel/Pages/EditAdmin'
import ManagerUser from './Adminpanel/Pages/ManagerUser'
import EditManager from './Adminpanel/Pages/EditManager'
import HousekeepingUser from './Adminpanel/Pages/HousekeepingUser'
import EditHousekeeping from './Adminpanel/Pages/EditHousekeeping'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/GuestUser' element={<GuestUser/>} />
        <Route path='/addGuest' element={<AddGuest/>} />
        <Route path='/editGuest/:id' element={<EditGuest/>} />
        <Route path='/AdminUser' element={<AdminUser/>} />
        <Route path='/EditAdmin/:id' element={<EditAdmin/>} />
        <Route path='/ManagerUser' element={<ManagerUser/>} />
        <Route path='/EditManager/:id' element={<EditManager/>} />
        <Route path='/HousekeepingUser' element={<HousekeepingUser/>} />
        <Route path='/EditHousekeeping/:id' element={<EditHousekeeping/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App