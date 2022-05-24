import React, {useState} from 'react';
import {Button, Loader} from '../index';
import {IconPlus} from '../../assets/SVGIcons';
import './PizzaItem.scss';
import PropTypes from "prop-types";
import {availableProps} from "../../modules/utils/availableProps";

const PizzaItem = ({name, imageUrl, price, types, sizes, isLoaded, id, onAddPizza, cartCount}) => {
    const availableTypes = ['тонке', 'традиційна'];
    const availableSizes = [26, 30, 40];
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0); 
    const onSelectType = index => {
        setActiveType(index);
    };

    const onSelectSize = index => {
        setActiveSize(index);
    };
    const addPizza = () => {
        const pizza = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizes[activeSize],
            type: availableTypes[activeType]
        }
        onAddPizza(pizza);
    }

    return (
        <> { isLoaded
            ? <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {availableProps(
                            availableTypes,
                            activeType,
                            types,
                            onSelectType
                        )}
                    </ul>
                    <ul>
                        {availableProps(
                            availableSizes,
                            activeSize,
                            sizes,
                            onSelectSize
                        )}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">від {price} UAH</div>
                    <Button
                        onClick={addPizza}
                        name={'Добавити'}
                        icon={<IconPlus/>}
                        count={cartCount}
                        outline
                        add
                    />
                </div>
            </div>
            : <Loader/>
        } </>

    )
}

PizzaItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    isLoaded: PropTypes.bool.isRequired,
    onAddPizza: PropTypes.func.isRequired,
    cartCount: PropTypes.number
}

PizzaItem.defaultProps = {
    name: '------',
    price: 0,
    types: [],
    sizes: []
}

export default PizzaItem;