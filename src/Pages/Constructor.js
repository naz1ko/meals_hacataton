import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart/Cart'
import Home from '../Components/Home/Home'

const Constructor = () => {
    return (
        <div>
            <Route>
                <Routes path='/' element={<Home />} />
                <Routes path='/cart' element={<Cart />} />
            </Route>
            {/* <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/product/:product' element={<Product/>} />
            </Routes> */}
        </div>
    )
}

export default Constructor
