import {combineReducers} from 'redux';
import filter from "./filter/filter.reducer";
import pizza from "./pizza/pizza.reducer";
import cart from "./cart/cart.reducer";

const rootReducer = combineReducers({
    filter,
    pizza,
    cart
})

export default rootReducer;
