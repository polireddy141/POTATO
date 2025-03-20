import React from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='app'>
      <NavBar/>
      <Routes>
        
        <Route path='cart' element = {<Cart/>} />
        <Route path='/placeorder' element = {<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    
    </>
  )
}

export default App
