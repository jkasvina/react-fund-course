import React from 'react';
import classes from './MuInput.module.css';

const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    );
};

export default MyInput;
