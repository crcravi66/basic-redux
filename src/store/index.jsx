import { createStore } from '@reduxjs/toolkit';


const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increament") {
        return {
            counter: state.counter + 1,
        }
    };

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        }
    };

    return state
};


const store = createStore(counterReducer)

export default store; 