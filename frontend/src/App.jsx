import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Adminpanel/Pages/Dashboard'
import GuestUser from './Adminpanel/Pages/GuestUser/GuestUser'
import AddGuest from './Adminpanel/Pages/GuestUser/addGuest'
import EditGuest from './Adminpanel/Pages/GuestUser/editGuest'
import AdminUser from './Adminpanel/Pages/AdminUser/AdminUser'
import EditAdmin from './Adminpanel/Pages/AdminUser/EditAdmin'
import ManagerUser from './Adminpanel/Pages/ManagerUser/ManagerUser'
import EditManager from './Adminpanel/Pages/ManagerUser/EditManager'
import HousekeepingUser from './Adminpanel/Pages/HousekeepingUser/HousekeepingUser'
import EditHousekeeping from './Adminpanel/Pages/HousekeepingUser/EditHousekeeping'
import Rooms from './Adminpanel/Pages/rooms/Rooms'
import AddRoom from './Adminpanel/Pages/rooms/AddRoom'
import EditRoom from './Adminpanel/Pages/rooms/EditRoom'
import Booking from './Adminpanel/Pages/Booking/Booking'
import AddBooking from './Adminpanel/Pages/Booking/AddBooking'
import EditBooking from './Adminpanel/Pages/Booking/EditBooking'
import Payment from './Adminpanel/Pages/Payment/Payement'
import AddPayment from './Adminpanel/Pages/Payment/AddPayment'
import EditPayment from './Adminpanel/Pages/Payment/EditPayment'
import MaintenanceRequest from './Adminpanel/Pages/MaintainanceRequest/MaintainanceRequest'
import AddMaintainanceRequest from './Adminpanel/Pages/MaintainanceRequest/AddMaintainanceRequest'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Panel */}

        {/* Dashboard Routing */}
        <Route path='/Dashboard' element={<Dashboard />} />

        {/* User Routing*/}
        <Route path='/GuestUser' element={<GuestUser />} />
        <Route path='/addGuest' element={<AddGuest />} />
        <Route path='/editGuest/:id' element={<EditGuest />} />

        <Route path='/AdminUser' element={<AdminUser />} />
        <Route path='/EditAdmin/:id' element={<EditAdmin />} />

        <Route path='/ManagerUser' element={<ManagerUser />} />
        <Route path='/EditManager/:id' element={<EditManager />} />

        <Route path='/HousekeepingUser' element={<HousekeepingUser />} />
        <Route path='/EditHousekeeping/:id' element={<EditHousekeeping />} />


        {/* Rooms Routing */}
        <Route path='/Room' element={<Rooms />} />
        <Route path='/addRoom' element={<AddRoom />} />
        <Route path='/EditRoom/:id' element={<EditRoom />} />

        {/* Booking Routing */}
        <Route path='/Booking' element={<Booking />} />
        <Route path='/AddBooking' element={<AddBooking />} />
        <Route path='/EditBooking/:id' element={<EditBooking />} />

        {/* Payment Routing */}
        <Route path='/Payment' element={<Payment />} />
        <Route path='/AddPayment' element={<AddPayment />} />
        <Route path='/EditPayment/:id' element={<EditPayment />} />

        {/* Payment Routing */}
        <Route path='/MaintainanceRequest' element={<MaintenanceRequest />} />
      <Route path='/AddMaintainanceRequest' element={<AddMaintainanceRequest />} />
        {/* <Route path='/EditPayment/:id' element={<EditPayment />} />  */}


      </Routes>
    </BrowserRouter>
  )
}

export default App