import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './components/Hero';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRoom from './pages/AllRoom';
import RommDetails from './pages/RommDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/Hotel Owner/Layout';
import DashBoard from './pages/Hotel Owner/DashBoard';
import ListRoom from './pages/Hotel Owner/ListRoom';
import AtRoom from './pages/Hotel Owner/AddRoom';

const App = () => {

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  
  // This will be true ONLY when the user is on the homepage ('/')
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg/>}
      
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRoom/>}/>
          <Route path='/rooms/:id' element={<RommDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<DashBoard/>}/>
            <Route path="add-room" element={<AtRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>

      {/* Conditionally render the Footer only on the Home page */}
      {isHomePage && <Footer/>}
    </div>
  )
}

export default App