import { TextContext } from './context';

import React, { Component } from 'react';

class TextB extends Component {
    static contextType = TextContext;
    render() {
        console.log(this.context);
        return (
            <div>
                TextPage
                <p>这里是顶层组件传的value: {this.context.text}</p>
                <button
                    onClick={() => {
                        this.context.cb();
                    }}
                >
                    context子集改变父级
                </button>
            </div>
        );
    }
}

export default TextB;
