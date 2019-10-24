export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELELTE_TODO = 'DELELTE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export function deleteTodo(index) {
    return {
        type: DELELTE_TODO,
        index
    }
}