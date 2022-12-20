import React, { useEffect } from 'react'
import './scss/Home.css'
import Main from '../Main/Main';
import { useSelector, useDispatch } from 'react-redux';
import { services } from '../../Services/Services';
import { allProduct, allMeals, getRandomMeal } from '../../Redux/Action';
import { Link } from 'react-router-dom';

const Home = () => {
    const { category } = useSelector(state => state.ProductReduser)
    const dispatch = useDispatch()

    useEffect(() => {
        const categoryProduct = async () => {
            await services.categoryProduct()
                .then((res) => {
                    // console.log('categories>>>', res.data.categories)
                    dispatch(allProduct(res.data.categories))
                })
        }
        categoryProduct()
    }, [])

    const productClick = (elem) => {
        const setMeals = async () => {
            await services.setMeals(elem)
                .then((res => {
                    console.log(res.data.meals);
                    dispatch(allMeals(res.data.meals))
                }))
        }
        setMeals(elem)
    }

    useEffect(() => {
        const randomMeals = async () => {
            await services.randomMeals()
                .then((res) => {
                    console.log('randomMeals>>>', res.data.meals);
                    dispatch(getRandomMeal(res.data.meals))
                })
        }
        randomMeals()
    }, [])


    return (
        <>
            <Main />
            <div className="container">
                <section className='latestMeals'>
                    <div className="title">Meals categories</div>
                    <div className="foots line">
                        {
                            category.map((elem) => {
                                return (
                                    <Link to='/meals'>
                                        <div className="category" onClick={() => dispatch(productClick(elem.strCategory))}>
                                            <img width='200px' src={elem.strCategoryThumb} alt="" />
                                            <span>{elem.strCategory}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </section>

                <section className='randomMeals'>
                    <div className="title">Random Meals</div>

                    <div className="foots line">



                        <div className="randomMeals block">
                            <img width='200px' src="https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg" alt="" />
                            <span>Katsu Chicken curry</span>
                            <button className='addToCard'>Add to card</button>
                        </div>
                    </div>
                </section>

                <section className='randomIngredients'>
                    <div className="title">Random Ingredients</div>

                    <div className="foots line">



                        <div className="randomIngredientss block">
                            <img width='200px' src="" alt="" />
                            <span>Turnips</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="title">Browse Country</div>
                    <div className="countries">
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/gb.png" alt="" />
                    </div>
                </section>

                <section>
                    <div className="letters block">
                        <div className="title">Browse By Name</div>
                        <span>A/</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home



// `https://www.themealdb.com/images/ingredients/{}.png`