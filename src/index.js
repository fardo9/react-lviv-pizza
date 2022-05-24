import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import './index.scss';
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOMClient
    .createRoot(document.getElementById("root"))
    .render(
        <Provider store={store}>

            <Router>
                <App/>
            </Router>
        </Provider>
    );
