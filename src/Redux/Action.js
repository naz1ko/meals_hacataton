import {
    CATEGORY_PRODUCT,
    GET_SEARCH,
    ALL_PRODUCT,
    ALL_MEALS,
    RANDOM_MEALS,
    GET_INFA,
    GET_TO_CARD
} from "./Type";


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

export const allMeals = (data) => {
    // console.log('allMeals>>>', data)
    return {
        type: ALL_MEALS,
        payload: data
    }
}

export const getRandomMeal = (data) => {
    // console.log('getRandomMeal>>>aaa',data)
    return {
        type: RANDOM_MEALS,
        payload: data
    }
}

export const setInfa = (data) => {
    // console.log('setInfa>>>', data)
    return {
        type: GET_INFA,
        payload: data
    }
}

export const getSearch = (data) => {
    // console.log('data>>>s', data)
    return {
        type: GET_SEARCH,
        payload: data
    }
}

export const addToCard = (id) => {
    console.log("id>>>", id)
    return {
        type: GET_TO_CARD,
        payload: id
    }
}
