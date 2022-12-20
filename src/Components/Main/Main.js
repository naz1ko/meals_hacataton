import React from 'react'
import { useSelector } from 'react-redux';

const Main = () => {
    const { ranMeal } = useSelector(state => state.ProductReduser)
    console.log(ranMeal)

    return (
        <div className='container'>
            <section className='main'>
                {
                    ranMeal.map((elem) => {
                        return (
                            <div className='ranMeal category'>
                                <span style={{color:'#fff'}}>Random meals</span>
                                <img src={elem.strMealThumb} alt="" />
                                <span>{elem.strMeal}</span>
                                <button className='addToCard'>Add to card</button>
                            </div>
                        )
                    })
                }
                {/* <img src="https://www.themealdb.com/images/meal-icon.png" alt="" /> */}
                <div className="text">
                    <span>Welcome to TheMealDB</span>
                    <form action="">
                        <input type="text"
                            placeholder='Search for a Meal ...' />
                        <input type="submit"
                            hidden />
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
                    ranMeal.map((elem) => {
                        return (
                            <div className='ranMeal category'>
                                <span style={{color:'#fff'}}>Random meals</span>
                                <img src={elem.strMealThumb} alt="" />
                                <span>{elem.strMeal}</span>
                                <button className='addToCard'>Add to card</button>
                            </div>
                        )
                    })
                }
                {/* <img src="https://www.themealdb.com/images/meal-icon.png" alt="" /> */}
            </section>
        </div>
    )
}

export default Main
