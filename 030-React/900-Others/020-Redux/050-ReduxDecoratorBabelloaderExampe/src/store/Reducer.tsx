import { createStore, Store } from "redux";
import { ActionKey } from "./action/ActionKey";
import { Action } from "./action/Action";

export const Reducer = function(state: any, action: Action){
    switch(action.type){
        case ActionKey.INCREASE_COUNTER:
            if (action.n){
                state = {counter: state.counter + action.n};
            }
            return state;
        case ActionKey.DECREASE_COUNTER:
            if (action.n){
                state = {counter: state.counter - action.n};
            }
            return state;
        default:
            return state;
    }
}
