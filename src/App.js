import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components";
import {HomePage, CartPage} from "./pages";
import {connect, useDispatch} from "react-redux";
import {fetchPizzas, setPizzas} from "./redux/pizza/pizza.actions";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/cart' element={<CartPage/>}/>
            </Routes>
        </div>
    );
};

export default App;