import {SET_CATEGORY, SET_SORT_BY} from "./filter.types";

const INITIAL_STATE = {
    categories: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    },
}
const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;