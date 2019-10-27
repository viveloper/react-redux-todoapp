import { ADD_TODO, SET_TODOS, COMPLETE_TODO, DELETE_TODO } from "../actions/todos"

const initialState = [];

const todos = (state = initialState, action) => {
    if (action.type === SET_TODOS) {
        const newState = [...action.todos];
        return newState;
    }
    else if (action.type === ADD_TODO) {
        const newState = [...state, action.todo];
        return newState;
    }
    else if (action.type === COMPLETE_TODO) {
        const newTodos = state.map((todo, index) => {
            if (index === action.index) {
                return { ...todo, completed: !todo.completed };
            }
            else {
                return { ...todo };
            }
        });
        return newTodos;
    }
    else if (action.type === DELETE_TODO) {
        const copiedTodos = state.map((todo) => ({ ...todo }));
        for (const index in copiedTodos) {
            if (parseInt(index) === action.index) {
                copiedTodos.splice(index, 1);
                break;
            }
        }

        return copiedTodos;
    }

    return state;
}

export default todos;