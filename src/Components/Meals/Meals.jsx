import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { services } from '../../Services/Services';
import { setInfa } from "../../Redux/Action"
import { Link } from 'react-router-dom';

const Meals = () => {
    const { meal } = useSelector(state => state.ProductReduser)
    const dispatch = useDispatch()

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
        <div className="container">
            <section className='latestMeals'>
                <div className="title">Meals {meal.length}</div>
                <div className="foots line">
                    {
                        meal.map((element) => {
                            return (
                                <Link to='/infa'>
                                    <div className="foot block" onClick={() => dispatch(mealClick(element.idMeal))}>
                                        <img width='200px' src={element.strMealThumb} alt="" />
                                        <span>{element.strMeal}</span>
                                        <button className='addToCard'>Add to card</button>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Meals
