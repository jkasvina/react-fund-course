import React from 'react';
import classes from './MyButton.module.css'

// делаем деструктуризацию, выцепляем специальный пропс чилдрен,
// остальные пропсы оставляем как есть
const MyButton = ({children, ...props}) => {
    return (
        // {...props} - передаёт все параменты из оболочки кнопки
        // например disabled и др
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
