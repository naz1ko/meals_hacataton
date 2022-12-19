import { CATEGORY_PRODUCT, GET_MEALS,ALL_PRODUCT} from "./Type";

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

export const producktClick = (getMeals) => {
    console.log('getMeals>>>', getMeals)
    return {
        type: GET_MEALS,
        payload: getMeals, 
    }
}