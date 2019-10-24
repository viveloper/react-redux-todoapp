import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, completeTodo } from '../actions/todoActions';

function Todo(props) {
    const { todos, addTodoDispatch, deleteTodoDispatch, completedTodoDispatch } = props;
    // const [todos, setTodos] = useState(todos);

    // useEffect(() => {
    //     const unsubscribe = store.subscribe(() => {
    //         setTodos(store.getState().todos);
    //     });
    //     return () => {
    //         unsubscribe();
    //     }
    // });

    const todoList = todos.map((todo, index) => {        
        return (
            <div key={index} className={ todo.completed ? 'Todo-item item-completed' : 'Todo-item'} onClick={()=>{completedTodoDispatch(index)}}>
                <div className="todo-text">{todo.text}</div>
                {todo.completed ? <div className="todo-completed">completed</div> : null}                
                <button className="button" onClick={(e) => { deleteTodoDispatch(index, e) }}>Delete</button>
            </div>
        );
    }).reverse();

    return (
        <div className="Todo">
            <TodoForm onClickAdd={addTodoDispatch} />
            <hr />
            <TodoList>{todoList}</TodoList>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoDispatch: (todo) => {
            dispatch(addTodo(todo));
        },
        deleteTodoDispatch: (index, e) => {
            e.stopPropagation();
            dispatch(deleteTodo(index));
        },
        completedTodoDispatch: (index) => {
            dispatch(completeTodo(index));
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoContainer;