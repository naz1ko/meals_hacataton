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
                    // console.log(res.data.meals);
                    dispatch(allMeals(res.data.meals))
                }))
        }
        setMeals(elem)
    }

    useEffect(() => {
        const randomMeals = async () => {
            await services.randomMeals()
                .then((res) => {
                    // console.log('randomMeals>>>', res.data.meals);
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
                                    <Link key={elem.strCategory} to='/meals'>
                                        <div className="category" onClick={() => productClick(elem.strCategory)}>
                                            <img width='200px' src={elem.strCategoryThumb} alt="" />
                                            <span>{elem.strCategory}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </section>

                <section>
                    <div className="title">Browse Country</div>
                    <div className="countries">
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/gb.png" alt="" />
                    </div>
                </section>

                <section>
                    <div className="letters category">
                        <div className="title">Browse By Name</div>
                        <span>A/</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home