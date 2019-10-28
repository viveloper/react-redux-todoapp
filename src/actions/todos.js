export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UP_TODO = 'UP_TODO';
export const DOWN_TODO = 'DOWN_TODO';
export const SELECT_TODO = 'SELECT_TODO';

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
export const upTodo = index => {
    return {
        type: UP_TODO,
        index
    }
}
export const downTodo = index => {
    return {
        type: DOWN_TODO,
        index
    }
}
export const selectTodo = index => {
    return {
        type: SELECT_TODO,
        index
    }
}