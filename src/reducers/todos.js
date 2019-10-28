import { ADD_TODO, SET_TODOS, COMPLETE_TODO, DELETE_TODO, UP_TODO, DOWN_TODO, SELECT_TODO } from "../actions/todos"

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
    else if (action.type === UP_TODO) {
        if (action.index === state.length - 1) {
            return state;
        }
        else {
            const copiedTodos = state.map((todo) => ({ ...todo }));
            let temp = copiedTodos[action.index];
            copiedTodos[action.index] = copiedTodos[action.index + 1];
            copiedTodos[action.index + 1] = temp;

            for (const index in copiedTodos) {
                if (parseInt(index) === action.index + 1) {
                    copiedTodos[index].selected = true;
                }
                else {
                    copiedTodos[index].selected = false;
                }
            }

            return copiedTodos;
        }
    }
    else if (action.type === DOWN_TODO) {
        if (action.index === 0) {
            return state;
        }
        else {
            const copiedTodos = state.map((todo) => ({ ...todo }));
            let temp = copiedTodos[action.index];
            copiedTodos[action.index] = copiedTodos[action.index - 1];
            copiedTodos[action.index - 1] = temp;

            for (const index in copiedTodos) {
                if (parseInt(index) === action.index - 1) {
                    copiedTodos[index].selected = true;
                }
                else {
                    copiedTodos[index].selected = false;
                }
            }

            return copiedTodos;
        }
    }
    else if (action.type === SELECT_TODO) {
        const copiedTodos = state.map((todo) => ({ ...todo }));
        for (const index in copiedTodos) {
            if (parseInt(index) === action.index) {
                copiedTodos[index].selected = true;
            }
            else {
                copiedTodos[index].selected = false;
            }
        }
        console.log('selectTodo', action.index);
        return copiedTodos;
    }

    return state;
}

export default todos;