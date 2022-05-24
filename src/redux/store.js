import { createStore, applyMiddleware, compose } from 'redux'
import {logger} from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    logger,
    thunk
]
const enhancer =  composeEnhancers(
    applyMiddleware(...middleware)
);
const store = createStore(rootReducer, enhancer);

export default store;