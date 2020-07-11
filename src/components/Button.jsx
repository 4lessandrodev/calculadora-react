import React from 'react';
import './Button.css';

export default props => {

    let buttonClass = 'Button ';
    buttonClass += props.operational ? 'Operational ' : '';
    buttonClass += props.double ? 'Double ' : '';
    buttonClass += props.triple ? 'Triple ' : '';
    
    return (
        <button className={buttonClass} onClick={e=>props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
};