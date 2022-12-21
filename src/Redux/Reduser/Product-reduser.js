import {
    CATEGORY_PRODUCT,
    ALL_PRODUCT,
    RANDOM_MEALS,
    GET_INFA,
    GET_SEARCH,
    ALL_MEALS
} from '../Type'

const initialState = {
    category: [],
    meal: [],
    ranMeal: [],
    infa: [],
    search: [],
    product:[],
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

        case ALL_MEALS: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                meal: newArr
            }
        }

        case RANDOM_MEALS: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                ranMeal: newArr
            }
        }

        case GET_INFA: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                infa: newArr
            }
        }

        case GET_SEARCH: {
            const { payload } = action
            const newArr = payload
            return {
                ...state,
                product: newArr
            }
        }


        default:
            return state
    }
}