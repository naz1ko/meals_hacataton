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

export const ingredient = (elem)=>{
    return axios.get(`lookup.php?i=${elem}`)
}

export const search=(e)=>{
    return axios.get(`search.php?s=${e}`)
}

export const addCard=(element)=>{
    return axios.get(`lookup.php?i=${element}`)
}

export const services = {
    categoryProduct,
    setMeals,
    randomMeals,
    ingredient,
    search,
    addCard
}