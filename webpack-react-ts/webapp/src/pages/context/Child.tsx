import React, { useContext } from 'react';
import TextB from './Text';
import { TextContext } from './context';
function Child(props) {
    const context = useContext(TextContext);
    console.log(context, 'child context');
    return (
        <div>
            Child Page
            <TextB />
        </div>
    );
}

export default Child;
