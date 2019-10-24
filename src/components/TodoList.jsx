import React from 'react';

export default function TodoList(props) {
    return(
        <div className="Todo-list">
            {props.children}
        </div>
    );
}