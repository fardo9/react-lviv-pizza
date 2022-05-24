import React from "react";
import cls from 'classnames';
import './Button.scss';

const Button = ({ name, outline, add, delimiter, cart, icon, count, onClick}) => {
    return (
        <button
            className={cls('button', {
                'button--outline': outline,
                'button--cart': cart,
                'button--add': add,
            })}
            onClick={onClick}
        >
            {icon} <span>{name}</span>
            {delimiter && <>
                <div className="button--delimiter"></div>
            </>}
            {count && <span className="count">{count}</span>}
        </button>
    )
}

export default Button;