import React from 'react'
import { getMeals } from '../../Services/Services'

const Meals = () => {
    return (
        <div>
            {
                getMeals.map((element) => {
                    return (
                        <div className="foot block">
                            <img width='200px' src={element.strMealThumb} alt="" />
                            <span >{element.strMeal}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Meals
