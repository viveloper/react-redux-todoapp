import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { setTodos, completeTodo, deleteTodo } from '../actions/todos';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodos: () => {
            setTimeout(() => {
                const todos = localStorage.getItem('TodoAppState') ? JSON.parse(localStorage.getItem('TodoAppState')).todos : [];
                dispatch(setTodos(todos));
            }, 100);
        },
        completeTodo: (index) => {
            dispatch(completeTodo(index));
        },
        deleteTodo: (index, e) => {
            e.stopPropagation();
            dispatch(deleteTodo(index));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);