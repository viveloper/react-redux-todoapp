import React, { useState, useEffect } from 'react';

export default function TodoForm(props) {
    const { onClickAdd } = props;
    const [text, setText] = useState('');

    const todo = {
        text: text,
        date: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
        completed: false
    }

    const handleChange = (e) => {
        if (e.target.name === 'text') {
            setText(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            onClickAdd(todo);
            setText('');
        }        
        else{
            alert('Fill in the content.');
        }
    }
                
    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            <textarea name="text" onChange={handleChange} value={text}></textarea>
            <button className="button button-block" type="submit">Add</button>
        </form>
    );
}