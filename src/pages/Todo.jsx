import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';

function Todo(props) {
    return (
        <div className="Todo">
            <TodoFormContainer />
            <TodoListContainer />
        </div>
    );
}

export default Todo;