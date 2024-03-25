import React from 'react';
import classes from './Input.module.css';

const Input = ({type='password', placeholder, onChange, value}) => {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={classes.input}
        />
    );
};

export default Input;