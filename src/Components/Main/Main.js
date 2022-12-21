import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { services } from '../../Services/Services';
import { Link } from 'react-router-dom';
import { getSearch } from '../../Redux/Action'
import { setInfa } from '../../Redux/Action';

const Main = () => {
    const { ranMeal, product } = useSelector(state => state.ProductReduser)
    // console.log(ranMeal)
    const dispatch = useDispatch()

    const [input, setInput] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(input)
        setInput('')
        dispatch(setSearch(input))
    }

    const setSearch = (e) => {
        const setSearch = async () => {
            await services.search(e)
                .then((res) => {
                    // console.log('setSearch>>>', res.data.meals) 
                    dispatch(getSearch(res.data.meals))
                })
        }
        setSearch(e)
    }

    const mealClick = (element) => {
        const mealClick = async () => {
            await services.ingredient(element)
                .then((res) => {
                    // console.log(res.data.meals);
                    dispatch(setInfa(res.data.meals))
                })
        }
        mealClick(element)
    }

    return (
        <div className='container'>
            <section className='main'>
                {
                    ranMeal.map((element) => {
                        return (
                            <Link key={element.idMeal} to='/infa'>
                                <div className='ranMeal category' onClick={() => dispatch(mealClick(element.idMeal))}>
                                    <span style={{ color: '#fff' }}>Random meals</span>
                                    <img src={element.strMealThumb} alt="" />
                                    <span>{element.strMeal}</span>
                                    <button className='addToCard'>Add to card</button>
                                </div>
                            </Link>
                        )
                    })
                }
                <div className="text">
                    <span>Welcome to TheMealDB</span>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search for a Meal ...' />
                        <input type="submit" hidden />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <div className="infa">
                        <img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt="" />
                        <span>Total Meals: 285</span>
                        <img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />
                        <span>Total Ingredients: 574</span>
                        <img src="https://www.themealdb.com/images/icons/image2.png" alt="" />
                        <span>Images: 285</span>
                    </div>
                </div>
                {
                    ranMeal.map((element) => {
                        return (
                            <Link to='/infa'>
                                <div className='ranMeal category'>
                                    <span style={{ color: '#fff' }}>Random meals</span>
                                    <img src={element.strMealThumb} alt="" />
                                    <span>{element.strMeal}</span>
                                    <button className='addToCard'>Add to card</button>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
            
            <div className='product line'>
                {
                    product.map((element) => {
                        return (
                            <Link to='/infa'>
                                <div className="foot block" onClick={() => setInfa(element.idMeal)}>
                                    <img width='200px' src={element.strMealThumb} alt="" />
                                    <span>{element.strMeal}</span>
                                    <button className='addToCard'>Add to card</button>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main