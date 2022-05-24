import React from 'react';
import PropTypes from "prop-types";
import {categories} from "../../data/dataCategories";
import './Categories.scss';

const Categories = ({selectCategory, activeCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => selectCategory(null)}
                    className={activeCategory === null ? 'active' : null}
                >Всі</li>
                {categories.map((name, idx) => (
                    <li
                        key={`${name}_${idx}`}
                        onClick={() => selectCategory(idx)}
                        className={activeCategory === idx ? 'active' : null}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    selectCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
    activeCategory: null,
};

export default React.memo(Categories);