import {
    CATEGORY_PRODUCT,
    ALL_PRODUCT,
    RANDOM_MEALS,
    GET_INFA,
    GET_SEARCH,
    ALL_MEALS,
    GET_TO_CARD
} from '../Type'

const initialState = {
    category: [],
    meal: [],
    ranMeal: [],
    infa: [],
    search: [],
    product: [],
    card: [],
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

        case GET_TO_CARD: {
            const { id } = action.payload
            const newArr = state.meal.filter(elem => elem.idMeal === id)
            return {
                ...state,
                card: [...state.card, newArr ]
            }
        }

        default:
            return state
    }
}