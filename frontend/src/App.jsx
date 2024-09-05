import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Adminpanel/Pages/Dashboard'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App