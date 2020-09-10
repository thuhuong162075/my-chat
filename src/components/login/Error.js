import React from 'react'

export default function Error(props) {
    const {text} = props
    return (
    <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{text}</div>
    );
}