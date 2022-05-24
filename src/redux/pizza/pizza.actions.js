import {ADD_TO_CART, SET_LOADED, SET_PIZZA} from "./pizza.types";
import axios from "axios";

const fetchPizzas = (sortBy, categories) => dispatch => {
    const category = `${categories !== null ? `category=${categories}`: ''}`;
    const requestLink = `${category}&_sort=${sortBy.type}&_order=${sortBy.order}`;
    dispatch(setLoading(false));
    axios.get(`/pizzas?${requestLink}`)
        .then(({ data }) => dispatch(setPizzas(data)));
};

const setLoading = payload => ({
    type: SET_LOADED,
    payload
});

const setPizzas = items => ({
    type: SET_PIZZA,
    payload: items
});

export {
    setPizzas,
    fetchPizzas
};
