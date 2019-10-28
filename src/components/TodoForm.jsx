import React, { useState } from 'react';

function TodoForm(props) {
    const [title, setTitle] = useState('');

    const { addTodo } = props;

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            const todo = {
                title,
                completed: false,
                username: 'anonymous',
                selected: false
            }
            addTodo(todo);
            setTitle('');
        }
    }

    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            <textarea name="title" onChange={handleChange} value={title}></textarea>
            <button className="button button-block" type="submit">ADD</button>
        </form>
    );
}

export default TodoForm;