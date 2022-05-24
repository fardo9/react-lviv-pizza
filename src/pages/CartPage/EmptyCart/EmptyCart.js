import React from "react";
import emptyIconCart from '../../../assets/img/empty-cart.png'

const EmptyCart = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Кошик порожній <icon>😕</icon></h2>
                    <p>
                        Найімовірніше, ви не замовляли ще піцу.<br/>
                        Щоб замовити піцу, перейди на головну сторінку.
                    </p>
                    <img src={emptyIconCart} alt="Empty cart"/>
                    <a href="/" className="button button--black">
                        <span>Повернутися назад</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart;