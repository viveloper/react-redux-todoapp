import React, { useEffect } from 'react';

function TodoList(props) {
    const { setTodos, completeTodo, deleteTodo, todos } = props;
    useEffect(() => {
        setTodos();
    }, [setTodos]);

    const list = todos.map((todo, index) => {
        return (
            <div key={index} className={todo.completed ? 'Todo-item item-completed' : 'Todo-item'} onClick={() => { completeTodo(index) }}>
                <div className="todo-title">{todo.title}</div>
                {todo.completed ? <div className="todo-completed">completed</div> : null}
                <button className="button" onClick={(e) => { deleteTodo(index, e) }}>DELETE</button>
            </div>
        );
    }).reverse();

    return (
        <div>
            {list.length > 0 ? list : <div style={{ textAlign: 'center', margin: '1rem' }}>{'Add something to do.'}</div>}
        </div>
    );

}

export default TodoList;