import React from "react";
import logo from "../../assets/img/pizza-logo.svg";
import {Button} from "../index";
import {IconDelimiter} from "../../assets/SVGIcons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './Header.scss';

const Header = () => {
    const {totalPrices, totalCount} = useSelector(({cart}) => cart);

    return (
        <header className="header">
            <div className="container">
                <Link to={'/'}>
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>Реактивна Львівська піцца</h1>
                            <p>найсмачніша піцца заходу</p>
                        </div>
                    </div>
                </Link>
               <Link to={'/cart'}>
                   <Button
                       name={`${totalPrices} UAH`}
                       icon={<IconDelimiter/>}
                       count={totalCount}
                       delimiter
                       cart
                   />
               </Link>
            </div>
        </header>
    )
}

export default Header;