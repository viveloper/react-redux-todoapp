import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const middleware = [];

const store = createStore(reducer, applyMiddleware(...middleware));

store.subscribe(() => {
    localStorage.setItem('TodoAppState', JSON.stringify(store.getState()));
});

export default store;