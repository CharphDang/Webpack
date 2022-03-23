import React, { useState } from 'react';

function State(props) {
    const [text, setText] = useState('初始字符串');
    const changeText = val => {
        setText(val);
    };
    return (
        <div>
            <p>{text}</p>
            <button
                onClick={() => {
                    changeText('新的字符串');
                }}
            >
                改变字符串
            </button>
        </div>
    );
}

export default State;
