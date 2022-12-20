import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { services } from '../../Services/Services';

const Meals = () => {
    const { meal } = useSelector(state => state.ProductReduser)
    // console.log('meal>>', meal)

    useEffect(() => {
        const ingredient = async () => {
            await services.ingredient()
                .then((res) => {
                    console.log('ingredient>>>', res.data.meals);
                })
        }
        ingredient()
    })

    return (
        <div className="container">
            <section className='latestMeals'>
                <div className="title">Meals {meal.length}</div>
                <div className="foots line">
                    {
                        meal.map((element) => {
                            return (
                                <div className="foot block">
                                    <img width='200px' src={element.strMealThumb} alt="" />
                                    <span>{element.strMeal}</span>
                                    <button className='addToCard'>Add to card</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Meals
