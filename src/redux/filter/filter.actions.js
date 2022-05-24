import {SET_CATEGORY, SET_SORT_BY, VISIBLE_POPUP} from "./filter.types";

const setSortBy = ({type, order}) => ({
    type: SET_SORT_BY,
    payload: {type, order}
 });

const setCategory = index => ({
    type: SET_CATEGORY,
    payload: index
});

const setVisiblePopUp = () => ({
    type: VISIBLE_POPUP
});

export {
    setSortBy,
    setCategory,
    setVisiblePopUp
};