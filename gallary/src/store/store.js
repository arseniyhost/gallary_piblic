import { createStore, applyMiddleware, compose } from 'redux';
import root  from './reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const initState = {};

const store = createStore(root, initState, 
    compose(
        applyMiddleware(...middleware),
    ));


window.store = store;

export default store;