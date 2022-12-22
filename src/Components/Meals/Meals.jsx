import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { services } from '../../Services/Services';
import { setInfa, addToCard } from "../../Redux/Action"
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

    const addClick = (id) => {
        dispatch(addToCard(id))
        console.log("addd>>",id);
    }

    return (
        <div className="container">
            <section className='latestMeals'>
                <div className="title">Meals {meal.length}</div>
                <div className="foots line">
                    {
                        meal.map((element) => {
                            return (
                                <>
                                    <div className="foot block" onClick={() => mealClick(element.idMeal)}>
                                        <Link key={element.idMeal} to='/infa'><img width='200px' src={element.strMealThumb} alt="" />
                                            <span>{element.strMeal}</span></Link>
                                        <button onClick={() => addClick(element.idMeal)} className='addToCard'>Add to card</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section >
        </div >
    )
}

export default Meals
