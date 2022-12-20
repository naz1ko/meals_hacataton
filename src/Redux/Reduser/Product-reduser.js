import { CATEGORY_PRODUCT, ALL_PRODUCT, RANDOM_MEALS } from '../Type'
import { ALL_MEALS } from './../Type';

const initialState = {
    category: [],
    meal: [],
    ranMeal:[],
    loading: false,
    error: null
}

export const ProductReduser = (state = initialState, action) => {
    // console.log('action>>>>', action)
    switch (action.type) {

        case CATEGORY_PRODUCT: {
            return {
                ...state,
            }
        }

        case ALL_PRODUCT: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                category: newArr
            }
        }

        case ALL_MEALS: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                meal: newArr
            }
        }

        case RANDOM_MEALS:{
            const { payload } = action
            const newArr = payload
            return{
                ...state,
                ranMeal: newArr
            }
        }

        default:
            return state
    }
}