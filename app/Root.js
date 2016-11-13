import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {Provider} from 'react-redux';
import App from './components/app/App';
import createLogger from 'redux-logger'
import rootReducer from './reducers/index'
const loggerMiddleware = createLogger();


const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware));


class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>

                <App/>
            </Provider>
        )
    }
}

export default Root;
