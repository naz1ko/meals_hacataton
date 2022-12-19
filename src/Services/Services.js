import axios from 'axios'

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

export const categoryProduct = () => {
    return axios.get('categories.php')
}

export const getMeals = (elem) => {
    return axios.get(`filter.php?c=${elem}`)
}

export const services = {
    categoryProduct,
    getMeals,
}