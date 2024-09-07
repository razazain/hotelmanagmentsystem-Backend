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
import Rooms from './Adminpanel/Pages/rooms/Rooms'
import AddRoom from './Adminpanel/Pages/rooms/AddRoom'
import EditRoom from './Adminpanel/Pages/EditRoom'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Panel */}

        {/* Dashboard Routing */}
        <Route path='/Dashboard' element={<Dashboard/>} />

        {/* User Routing*/}
        <Route path='/GuestUser' element={<GuestUser/>} />
        <Route path='/addGuest' element={<AddGuest/>} />
        <Route path='/editGuest/:id' element={<EditGuest/>} />

        <Route path='/AdminUser' element={<AdminUser/>} />
        <Route path='/EditAdmin/:id' element={<EditAdmin/>} />

        <Route path='/ManagerUser' element={<ManagerUser/>} />
        <Route path='/EditManager/:id' element={<EditManager/>} />

        <Route path='/HousekeepingUser' element={<HousekeepingUser/>} />
        <Route path='/EditHousekeeping/:id' element={<EditHousekeeping/>} />


        {/* Rooms Routing */}
        <Route path='/Room' element={<Rooms/>} />
        <Route path='/addRoom' element={<AddRoom/>} />
        <Route path='/EditRoom/:id' element={<EditRoom/>} />




      </Routes>
    </BrowserRouter>
  )
}

export default App