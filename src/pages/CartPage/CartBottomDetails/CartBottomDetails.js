import React from "react";
import {IconReturnBack} from "../../../assets/SVGIcons";

const CartBottomDetails = ({totalCount, totalPrices}) => {
    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span> Кількість піцц: <b>{totalCount} шт.</b> </span>
                <span> Сума замовлення: <b>{totalPrices} UAH</b> </span>
            </div>
            <div className="cart__bottom-buttons">
                <a href="/" className="button button--outline button--add go-back-btn">
                    <IconReturnBack/>
                    <span>Повернутись назад</span>
                </a>
                <div className="button pay-btn">
                    <span>Зробити оплату</span>
                </div>
            </div>
        </div>
    )
};

export default CartBottomDetails;