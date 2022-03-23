import React, { Component } from 'react';
import Child from './Child';
import { Provider } from './context';

class Parent extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            text: '这里是新值'
        };
    }

    changeFun = () => {
        this.setState({
            text: 123
        });
    };
    render() {
        return (
            <Provider
                value={{
                    text: this.state.text,
                    cb: this.changeFun
                }}
            >
                <div>Parent Page</div>
                <Child />
            </Provider>
        );
    }
}

export { Parent };
