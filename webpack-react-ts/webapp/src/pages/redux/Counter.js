import React, { Component } from 'react';
import store from '@src/store/store';

export default class Counter extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    addFun = () => {
        store.dispatch({ type: 'add' });
    };
    menusFun = () => {
        store.dispatch({ type: 'menus' });
    };
    render() {
        console.log(store.getState(), 'store.getState()');
        return (
            <div>
                <p>{store.getState().counterReducer}</p>
                <p>
                    <button onClick={this.addFun}>add</button>
                    <button onClick={this.menusFun}>menus</button>
                </p>
            </div>
        );
    }
}
