import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { setTodos, completeTodo, deleteTodo, upTodo, downTodo, selectTodo } from '../actions/todos';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodos: () => {
            setTimeout(() => {
                const todos = localStorage.getItem('TodoAppState-v1.0.1') ? JSON.parse(localStorage.getItem('TodoAppState-v1.0.1')).todos : [];
                dispatch(setTodos(todos));
            }, 100);
        },
        completeTodo: (index) => {
            dispatch(completeTodo(index));
        },
        deleteTodo: (index) => {
            if (window.confirm('Do you want to delete?')) {
                dispatch(deleteTodo(index));
            }
        },
        upTodo: (e, index) => {
            e.stopPropagation();
            dispatch(upTodo(index));
        },
        downTodo: (e, index) => {
            e.stopPropagation();
            dispatch(downTodo(index));
        },
        selectTodo: (index) => {
            dispatch(selectTodo(index));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);