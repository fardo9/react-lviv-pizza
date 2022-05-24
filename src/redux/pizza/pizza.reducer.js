import { SET_LOADED, SET_PIZZA} from "./pizza.types";

const INITIAL_STATE = {
    items: [],
    isLoading: false,
}
const pizzaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return {
                ...state,
                items: action.payload,
                isLoading: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default pizzaReducer;