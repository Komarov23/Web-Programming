import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './dialog.css';

const Dialog = ({ isOpen, children }) => {
  return (
    <div className='dialog__wrapper'>
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="dialog"
            unmountOnExit
        >
            <div className="dialog__content">
                { children }
            </div>
        </CSSTransition>
    </div>
  );
};

export default Dialog;
