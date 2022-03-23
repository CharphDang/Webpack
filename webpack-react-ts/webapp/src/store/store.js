import { createStore, combineReducers } from 'redux';
import { counterAReducer } from './counterAStore';
import { counterReducer } from './counterStore';
import counterBReducer from '../pages/redux-toolkit/couterBSlice';
// const reducer = combineReducers({
//     counterAReducer,
//     counterReducer
// });
// const store = createStore(reducer);
// export default store;

// redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
export default configureStore({
    reducer: {
        counterAReducer,
        counterReducer,
        counterBReducer
    }
});
