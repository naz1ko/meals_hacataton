import axios from 'axios'

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

export const categoryProduct = () => {
    return axios.get(`categories.php`)
}

export const setMeals = (elem) => {
    return axios.get(`filter.php?c=${elem}`)
}

export const randomMeals = ()=>{
    return axios.get('random.php')
}

export const ingredient = ()=>{
    return axios.get(`lookup.php?i=52772`)
}

export const services = {
    categoryProduct,
    setMeals,
    randomMeals,
    ingredient
}