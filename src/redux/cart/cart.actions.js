import {ADD_PIZZA_TO_CART, CLEAR_CART, MINUS_ITEM, PLUS_ITEM, REMOVE_CART_ITEM} from "./cart.types";

export const addPizzaToCart = pizza => ({
    type: ADD_PIZZA_TO_CART,
    payload: pizza
});

export const removeCartItem = id => ({
    type: REMOVE_CART_ITEM,
    payload: id
});

export const plusCartItem = id => ({
    type: PLUS_ITEM,
    payload: id
});

export const minusCartItem = id => ({
    type: MINUS_ITEM,
    payload: id
});

export const clearCart = () => ({
    type: CLEAR_CART
})