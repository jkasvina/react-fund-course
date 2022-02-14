import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.my_modal];

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.my_modal_content} onClick={(e) => e.stopPropagation()}>
                {/*onClick={(e) => e.stopPropagation() позволяет окну не закрываться при нажатии на инпуты*/}
                {children}
            </div>
        </div>
    );
};

export default MyModal;