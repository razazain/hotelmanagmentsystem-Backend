import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Adminpanel/Pages/Dashboard'
import GuestUser from './Adminpanel/Pages/GuestUser'
import AddGuest from './Adminpanel/Pages/addGuest'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/GuestUser' element={<GuestUser/>} />
        <Route path='/addGuest' element={<AddGuest/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App