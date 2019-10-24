import { ADD_TODO, COMPLETE_TODO, DELELTE_TODO } from '../actions/todoActions';

export function todosReducer(previousState, action) {
    if (action.type === ADD_TODO) {
        return [...previousState.todos, action.todo];
    }
    else if (action.type === COMPLETE_TODO) {        
        const newTodos = previousState.todos.map((todo, index) => {
            if (index === action.index) {                
                return { ...todo, completed: !todo.completed };
            }
            else {
                return { ...todo };
            }
        });
        return newTodos;
    }
    else if (action.type === DELELTE_TODO) {                
        const copiedTodos = previousState.todos.map((todo) => ({ ...todo }));
        for (const index in copiedTodos) {            
            if(parseInt(index) === action.index){                
                copiedTodos.splice(index, 1);
                break;
            }
        }

        return copiedTodos;
    }
    else {
        return previousState.todos;
    }
}