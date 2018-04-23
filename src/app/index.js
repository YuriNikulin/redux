import React from 'react';
import ReactDOM from 'react-dom';

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App.js";
const initialState = [
    'SLTS',
    'ES'
];

const playlist = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TRACK':
            return [...state, action.payload];
        default:
            return state;    
    }
    return state;
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);