import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore} from "redux";
import {Provider} from "react-redux";


const initialState = {
    showName: false,
    name: 'Default'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'True':
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}


const store = legacy_createStore(profileReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
            <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
