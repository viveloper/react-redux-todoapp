import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../actions/todos';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);