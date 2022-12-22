import React from 'react';
import './scss/Header.css'
import { Link } from 'react-router-dom';
import Meals from './../Meals/Meals';
import { Routes, Route } from 'react-router-dom';
import Information from '../Information/Information';


const HederComponents = () => {

    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <div className="nav-img">
                            <Link to='/'><img src="https://www.themealdb.com/images/logo-small.png" alt="" /></Link>
                        </div>
                        <div className="link">
                            <ul className="link- home"><li><Link to='/'> Home</Link></li></ul>
                            <ul className="link- card"><li><Link to="cart">Card</Link></li></ul>
                        </div>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path='/meals' element={<Meals />} />
                <Route path='/infa' element={<Information />} />
            </Routes>
        </div>
    )
}

export default HederComponents
