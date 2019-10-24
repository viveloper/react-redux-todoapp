
import { combineReducers } from 'redux';

import {todosReducer as todos} from './todosReducer';
import {filterReducer as filter} from './filterReducer';

// // ========== merge reducers ==========
export function rootReducer(previousState, action) {
    return {
        todos: todos(previousState, action),
        filter: filter(previousState, action)
    };
}

// // ========== using combineReducers ==========
// export const rootReducer = combineReducers({
//     todos,
//     filter
// });

