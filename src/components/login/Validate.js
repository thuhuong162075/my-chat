import React from 'react'
import '../../assets/css/validate.css'
export default function Validate(props) {
    const { text, valiClassName} = props
    var classNames = require('classnames');
    return (
        <div className= {classNames('invalid', valiClassName)}>
            <div className="text-invalid">{text}</div>
        </div>
    );
}