import React from "react";
import {IconCart, IconTrash} from "../../../assets/SVGIcons";

const CarTopNavigation = ({ clearCart }) => {
    return(
        <div className="cart__top">
            <h2 className="content__title">
                <IconCart/>
                Кошик
            </h2>
            <div className="cart__clear" onClick={clearCart}>
                <IconTrash/>
                <span>Очистити кошик</span>
            </div>
        </div>
    )
}
export default CarTopNavigation;