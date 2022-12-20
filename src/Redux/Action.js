import { CATEGORY_PRODUCT, ALL_PRODUCT, ALL_MEALS, RANDOM_MEALS } from "./Type";

export const categoryProduct = (data) => {
    return {
        type: CATEGORY_PRODUCT,
        payload: { data }
    }
}

export const allProduct = (data) => {
    // console.log("data>>>c", data)
    return {
        type: ALL_PRODUCT,
        payload: data
    }
}

export const allMeals =(data)=>{
    // console.log('allMeals>>>', data)
    return{
        type: ALL_MEALS,
        payload: data
    }
}

export const getRandomMeal = (data)=>{
    // console.log('getRandomMeal>>>aaa',data)
    return{
        type: RANDOM_MEALS,
        payload: data
    }
}