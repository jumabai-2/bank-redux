import React from 'react';
import {createStore} from "redux";


const defaultState = {
    cash: 100000,
    sum:0
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state,sum: state.sum + action.payload}
        case "GET_USER":
            return {...state,sum:state.sum - action.payload}

        case "ADD_CASH":
            return {...state,cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state,cash: state.cash - action.payload}
        default:
            return state
    }
}
export const store = createStore(reducer)
const Action = () => {
    return (
        <div>

        </div>
    );
};

export default Action;