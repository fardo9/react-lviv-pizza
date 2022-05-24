import React from "react";
import {IconMinus, IconPlus, IconRemove} from "../../../assets/SVGIcons";

const CartItem = ({id, name, type, size, imageUrl, totalPrice, totalCount, onRemoveItem, onPlus, onMinus}) => {
    const handleMinusItem = () => {
        onMinus(id);
    };

    const handlePlusItem = () => {
      onPlus(id)
    };

    return (
        <div className="content__items">
            <div className="cart__item">
                <div className="cart__item-img">
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                </div>
                <div className="cart__item-info">
                    <h3>{name}</h3>
                    <p>{type} тісто, {size} см.</p>
                </div>
                <div className="cart__item-count">
                    <div
                        onClick={handleMinusItem}
                        className="button button--outline button--circle cart__item-count-minus">
                        <IconMinus/>
                    </div>

                    <b>{totalCount}</b>

                    <div
                        onClick={handlePlusItem}
                        className="button button--outline button--circle cart__item-count-plus">
                        <IconPlus/>
                    </div>
                </div>
                <div className="cart__item-price">
                    <b>{totalPrice} ₽</b>
                </div>
                <div className="cart__item-remove" onClick={onRemoveItem}>
                    <div className="button button--outline button--circle">
                        <IconRemove/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;