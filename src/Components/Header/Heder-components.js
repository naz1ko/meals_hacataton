import React from 'react';
// import { useState } from 'react';
import './scss/Header.css'
import { Link } from 'react-router-dom';
import Meals from './../Meals/Meals';
import { Routes, Route } from 'react-router-dom';
import Information from '../Information/Information';
// import { useDispatch } from 'react-redux';
// import { services } from '../../Services/Services';
// import { getSearch } from '../../Redux/Action'
// import Product from '../../Components/Product/Product';

const HederComponents = () => {
    // const dispatch = useDispatch()
    // const [input, setInput] = useState()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setInput(input)
    //     setInput('')
    //     dispatch(setSearch(input))
    // }

    // const setSearch = (e) => {
    //     const setSearch = async () => {
    //         await services.search(e)
    //             .then((res) => {
    //                 // console.log('setSearch>>>', res.data.meals) 
    //                 dispatch(getSearch(res.data.meals))
    //             })
    //     }
    //     setSearch(e)
    // }

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
                            <ul className="link- card"><li><Link to="/cart">Card</Link></li></ul>
                            {/* <form className="link-input"
                                onSubmit={handleSubmit}>
                                <Link to='/main'><input type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="search" />
                                    <input type="submit" hidden /></Link>
                            </form> */}
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
