import { createStore, Store } from "redux";
import { State } from "./State";
import { ActionKey } from "./action/ActionKey";
import { Action } from "./action/Action";

let store = createStore(function(state: State, action: Action){
    switch(action.type){
        case ActionKey.INCREASE_COUNTER:
            if (action.n){
                state.counter += action.n;
            }
            return state.counter;
        case ActionKey.DECREASE_COUNTER:
            if (action.n){
                state.counter -= action.n;
            }
            return state.counter;
        default:
            return state;
    }
}, {
    counter: 0
});

export default store;

console.log(store.getState());
console.log(store.dispatch({type: ActionKey.INCREASE_COUNTER, n: 10}));
console.log(store.dispatch({type: ActionKey.DECREASE_COUNTER, n: 10}));
console.log(store.getState());