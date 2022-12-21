import React from 'react'
import Main from '../Main/Main'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {mealClick} from '../Meals/Meals'
// import { setInfa } from '../../Redux/Action';

const Product = () => {
    // const { product } = useSelector(state => state.ProductReducer)


    return (
        <div className='container'>
            <Main />
            {/* {
                product.map((element) => {
                    return (
                        <Link to='/infa'>
                            <div className="foot block" onClick={()=> setInfa(element.idMeal)}>
                                <img width='200px' src={element.strMealThumb} alt="" />
                                <span>{element.strMeal}</span>
                                <button className='addToCard'>Add to card</button>
                            </div>
                        </Link>
                    )
                })
            } */}
        </div>
    )
}

export default Product