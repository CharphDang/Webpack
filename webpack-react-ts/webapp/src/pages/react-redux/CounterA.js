import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    console.log('state', state);
    return {
        number: state.counterAReducer
    };
};

// const mapDispatchToProps = {
//     addFun: () => ({ type: 'addA' }),
//     menusFun: () => ({ type: 'menusA' })
// };

const mapDispatchToProps = dispatch => {
    const actions = {
        addFun: () => ({ type: 'addA' }),
        menusFun: () => ({ type: 'menusA' })
    };
    return bindActionCreators(actions, dispatch);
};
@connect(mapStateToProps, mapDispatchToProps)
export default class componentName extends Component {
    render() {
        const { number, addFun, menusFun } = this.props;
        return (
            <div>
                <p>{number}</p>
                <p>
                    <button onClick={addFun}>add</button>
                    <button onClick={menusFun}>menus</button>
                </p>
            </div>
        );
    }
}
