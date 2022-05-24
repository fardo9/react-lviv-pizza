import {getTotalPrice, getTotalSum} from "../../modules/utils/getTotal";
import {itemLength, totalPizza} from "./cart.constants";
import {
    ADD_PIZZA_TO_CART,
    CLEAR_CART,
    MINUS_ITEM,
    PLUS_ITEM,
    REMOVE_CART_ITEM
} from "./cart.types";

const INITIAL_STATE = {
    items: {},
    totalPrices: 0,
    totalCount: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items,  action.payload];
            const newPizza = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPriceByPizzas: getTotalPrice(currentPizzaItems)
                }
            };
            const totalCount = getTotalSum(newPizza, itemLength);
            const totalPrices = getTotalSum(newPizza, totalPizza);
            return {
                ...state,
                items: newPizza,
                totalCount,
                totalPrices
            }
        case REMOVE_CART_ITEM: {
            const newPizza = {
                ...state.items
            };
            const currentTotalPrice = state.totalPrices - newPizza[action.payload].totalPriceByPizzas;
            const currentTotalCount = state.totalCount - newPizza[action.payload].items.length;
            delete newPizza[action.payload];
            return {
                ...state,
                items: newPizza,
                totalPrices: currentTotalPrice,
                totalCount: currentTotalCount
            }
        }
        case PLUS_ITEM: {
            const newObjectPizza = [...state.items[action.payload].items, state.items[action.payload].items[0]];
            const newPizza = {
                ...state.items,
                [action.payload]: {
                    items: newObjectPizza,
                    totalPriceByPizzas: getTotalPrice(newObjectPizza)
                }
            };
            const totalCount = getTotalSum(newPizza, itemLength);
            const totalPrices = getTotalSum(newPizza, totalPizza);
            return {
                ...state,
                items: newPizza,
                totalCount,
                totalPrices
            }
        }
        case MINUS_ITEM: {
            const oldItem = state.items[action.payload].items
            const newObjectItems = oldItem.length > 1 ? state.items[action.payload].items.slice(1) : oldItem;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjectItems,
                    totalPriceByPizzas: getTotalPrice(newObjectItems)
                }
            };
            const totalCount = getTotalSum(newItems, itemLength);
            const totalPrices = getTotalSum(newItems, totalPizza);
            return {
                ...state,
                items: newItems,
                totalPrices,
                totalCount
            };
        }
        case CLEAR_CART :
            return{
                ...state,
                items: {},
                totalCount: 0,
                totalPrices: 0
            }
        default:
            return state;
    }
}

export default cartReducer;