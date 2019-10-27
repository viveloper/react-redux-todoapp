export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const setTodos = todos => {
    return {
        type: SET_TODOS,
        todos
    }
}

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const completeTodo = index => {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index
    }
}