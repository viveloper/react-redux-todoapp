import React, { useEffect } from 'react';

function TodoList(props) {
    const { setTodos, completeTodo, deleteTodo, upTodo, downTodo, selectTodo, todos } = props;
    useEffect(() => {
        setTodos();
    }, [setTodos]);

    const list = todos.map((todo, index) => {
        const selectedTodoStyle = todo.selected ? ' selectedTodo' : '';
        return (
            <div key={index} className={todo.completed ? `Todo-item item-completed${selectedTodoStyle}` : `Todo-item${selectedTodoStyle}`} onClick={() => { selectTodo(index) }}>
                <div>
                    <button className={todo.completed ? 'button btn-complete btn-completed' : 'button btn-complete'} onClick={() => { completeTodo(index) }}>
                        {todo.completed ? <i className="fas fa-check"></i> : null}
                    </button>
                </div>
                <div className="todo-title">{todo.title}</div>
                {todo.completed ? <div className="todo-completed">completed</div> : null}
                <div className="todo-button-container">
                    <button className="button btn-up" onClick={(e) => { upTodo(e, index) }}>
                        <i className="fas fa-angle-up"></i>
                    </button>
                    <button className="button btn-down" onClick={(e) => { downTodo(e, index) }}>
                        <i className="fas fa-angle-down"></i>
                    </button>
                    {/* <button className="button btn-edit">
                        <i className="far fa-edit"></i>
                    </button> */}
                    <button className="button btn-delete" onClick={() => { deleteTodo(index) }}>
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