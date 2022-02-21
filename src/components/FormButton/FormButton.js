

import React from 'react';
import './form-button.scss';

const CustomButton = props => (
    <button className="learn-more">
    <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">{props.children}</span>
    </button>
);

export default CustomButton;