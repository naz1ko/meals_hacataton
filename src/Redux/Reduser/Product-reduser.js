import { CATEGORY_PRODUCT, ALL_PRODUCT, GET_MEALS } from '../Type'

const initialState = {
    category: [],
    meal: [],
    loading: false,
    error: null
}

export const ProductReduser = (state = initialState, action) => {
    console.log('action>>>>', action)
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

        case GET_MEALS: {
            const { payload } = action
            const getMeals= payload
            return {
                ...state,
                meal: getMeals
            }
        }

        default:
            return state
    }
}