import React from 'react'
import './scss/Header.css'
import { Link } from 'react-router-dom';

const HederComponents = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <div className="nav-img">
                            <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
                        </div>
                        <div className="link">
                            <ul className="link- home"><li><Link to='/'> Home</Link></li></ul>
                            <ul className="link- card"><li><Link to="/cart">Card</Link></li></ul>
                            <form className="link-input">
                                <input type="text"
                                    placeholder="search" />
                                <input type="submit" hidden />
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default HederComponents
