import React, {useCallback, useEffect} from "react";
import {Categories, PizzaItem, SortingBy} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/filter/filter.actions";
import {fetchPizzas} from "../../redux/pizza/pizza.actions";
import {addPizzaToCart} from "../../redux/cart/cart.actions";

const HomePage = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizza: {items}}) => items);
    const cartItems = useSelector(({cart: {items}}) => items);
    const isLoaded = useSelector(({pizza}) => pizza.isLoading);
    const {categories, sortBy} = useSelector(({filter}) => filter);

    useEffect(() => {
        // if(!items.length) {
        dispatch(fetchPizzas(sortBy, categories));
        // }
    },[sortBy, categories]);

    const selectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    const selectSortBy = useCallback(type => {
        dispatch(setSortBy(type))
    }, []);
    const addPizza = pizza => {
        dispatch(addPizzaToCart(pizza));
    };


    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        selectCategory={selectCategory}
                        activeCategory={categories}
                    />
                    <SortingBy
                        selectSortBy={selectSortBy}
                        activeSortBy={sortBy.type}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((pizza) => (
                        <PizzaItem
                            key={pizza.id}
                            onAddPizza={addPizza}
                            isLoaded={isLoaded}
                            cartCount={cartItems?.[pizza.id]?.items?.length}
                            {...pizza}
                        />))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;