import React from 'react';
import classes from './Header.module.css';


const Header = ({navBar}) => {
    console.log(navBar);
    return (
        <ul className={classes.list}>
            {
             navBar.map((item, index) => <li key={index} className={classes.item}>{item}</li>)
            }
        </ul>
    );
};

export default Header;