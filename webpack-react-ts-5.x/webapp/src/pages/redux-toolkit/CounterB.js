import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { decrement, increment } from './couterBSlice';

function CounterB(props) {
    const count = useSelector(state => {
        console.log(state, 'slice');
        return state.counterBReducer.value;
    });
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default CounterB;
