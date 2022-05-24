import React, {useEffect, useRef, useState} from "react";
import {IconArrowDown} from "../../assets/SVGIcons";
import {sortList} from "../../data/dataCategories";
import './SortingBy.scss';

const SortingBy = ({ selectSortBy, activeSortBy }) => {
    const [visiblePopUp, setVisiblePopUp] = useState(false);
    const activeSortLabel = sortList.find(obj => obj.type === activeSortBy).name;
    const sortRef = useRef();

    const toggleVisiblePopUp = () => {
        setVisiblePopUp(!visiblePopUp);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath() && event.composedPath());
        if(!event.path.includes(sortRef.current)) {
            setVisiblePopUp(false);
        }
    };;

    const onSelectSortBy = index => {
        selectSortBy(index);
        setVisiblePopUp(!visiblePopUp);
    };

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    },[]);

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label"
                 onClick={toggleVisiblePopUp}
            >
                <IconArrowDown customClass={visiblePopUp ? 'rotated' : null} />
                <b>Сортування по:</b>
                <span>{activeSortLabel}</span>
            </div>
            {visiblePopUp  && <div className='sort__popup'>
                <ul>
                    {sortList.map((list, idx) => (
                        <li
                            key={`${list.type}_${idx}`}
                            onClick={() => onSelectSortBy(list)}
                            className={activeSortBy === idx ? 'active' : null}
                        >
                            {list.name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
};

SortingBy.defaultProps = {
    items: []
}

export default React.memo(SortingBy);