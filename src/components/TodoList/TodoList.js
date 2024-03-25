import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.css';


const TodoList = ({ tasks, handleDelete, handleDone, handleEdit }) => {
    const [currentEdit, setCurrentEdit ] = useState('')

    return (
        <ul className={classes.list}>
            {
                tasks.map(item =>
                    <Todo
                        key={item.id}
                        todo={item}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                        handleEdit={handleEdit}
                        handleCurrentEdit={setCurrentEdit}
                        isEdit = {currentEdit === item.id}
                    />)
            }
        </ul>
    );
};

export default TodoList;