import React from 'react';
import classes from './Example.module.css';


const Example = ({children}) => {
    return (
        <div>
            {children}
            <p className={classes.user}>User</p>
        </div>
    );
};

export default Example;