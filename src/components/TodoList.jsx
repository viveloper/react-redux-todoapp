import React, { useEffect } from 'react';

function TodoList(props) {
    const { setTodos, completeTodo, deleteTodo, todos } = props;
    useEffect(() => {
        setTodos();
    }, [setTodos]);

    const list = todos.map((todo, index) => {
        return (
            <div key={index} className={todo.completed ? 'Todo-item item-completed' : 'Todo-item'}>
                <div className="todo-title">{todo.title}</div>
                {todo.completed ? <div className="todo-completed">completed</div> : null}
                <div className="todo-button-container">
                    <button className={todo.completed ? 'button btn-complete btn-completed' : 'button btn-complete'} onClick={() => { completeTodo(index) }}>
                        {todo.completed ? <i className="fas fa-check"></i> : null}
                    </button>
                    {/* <button className="button btn-edit">
                        <i className="far fa-edit"></i>
                    </button> */}
                    <button className="button btn-delete" onClick={(e) => { deleteTodo(index, e) }}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
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