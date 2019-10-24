import { createStore } from 'redux';
import { rootReducer } from './reducers'
import { addTodo } from './actions/todoActions';

const initialState = {
    todos: [],
    filteredTodos: [],
    filter: 'SHOW_ALL'
}

const store = createStore(rootReducer, initialState);

const preData = {
    todos: [
        {
            text: 'React Hooks',
            date: '2019-10-22',
            completed: true
        },
        {
            text: 'Flux Architecture',
            date: '2019-10-23',
            completed: true
        },
        {
            text: 'Redux Fundamentals',
            date: '2019-10-24',
            completed: true
        },
        {
            text: 'Container and Presentational Component',
            date: '2019-10-24',
            completed: true
        },
        {
            text: 'React-Redux',
            date: '2019-10-24',
            completed: false
        },
        {
            text: 'Redux-Thunk',
            date: '2019-10-24',
            completed: false
        }
    ],    
    filter: 'SHOW_ALL'
}

setTimeout(() => {
    preData.todos.forEach(todo => {
        store.dispatch(addTodo(todo));
    });
}, 300);

export default store;