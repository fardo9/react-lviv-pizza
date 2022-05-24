import React from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartItem from "./CartItem/CartItem";
import CarTopNavigation from "./CartTopNavigation/CartTopNavigation";
import CartBottomDetails from "./CartBottomDetails/CartBottomDetails";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, minusCartItem, plusCartItem, removeCartItem} from "../../redux/cart/cart.actions";

const CartPage = () => {
    const dispatch = useDispatch();
    const {totalPrices, totalCount, items} = useSelector(({cart}) => cart);
    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0]
    });
    const clearFullCart = () => {
        if (window.confirm('Are you sure ?')) {
            dispatch(clearCart());
        }
    };
    const onRemoveItem = id => {
        dispatch(removeCartItem(id))
    };

    const onPlusCartItem = id => {
        dispatch(plusCartItem(id))
    };

    const onMinusCartItem = id => {
        dispatch(minusCartItem(id))
    };


    return (
        <> {totalCount === 0
            ? <EmptyCart/>
            : <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        <CarTopNavigation clearCart={clearFullCart} />
                        {addedPizzas.map( item => (
                            <CartItem
                                key={item.id}
                                onPlus={onPlusCartItem}
                                onMinus={onMinusCartItem}
                                onRemoveItem={onRemoveItem}
                                totalCount={items[item.id].items.length}
                                totalPrice={items[item.id].totalPriceByPizzas}
                                {...item}
                            />
                        ))}
                        <CartBottomDetails
                            totalCount={totalCount}
                            totalPrices={totalPrices}
                        />
                    </div>
                </div>
            </div>
        } </>
    )
}

export default CartPage;