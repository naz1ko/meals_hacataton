import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const { card } = useSelector(state => state.ProductReducer)
    console.log('card>>>>',card)
    return (
        <div>
            {
                card.map((element) => {
                    return (
                        <>
                            <div className="foot block" >
                                <Link key={element.idMeal} to='/infa'><img width='200px' src={element.strMealThumb} alt="" />
                                    <span>{element.strMeal}</span></Link>
                                <button className='addToCard'>Add to card</button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CartItem;