import * as React from "react";
import * as ReactDOM from "react-dom";
import AppComponent from "./component/AppComponent";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const test1Reducer = function(state = "test1", action){
    if (action.type == "alert1"){
        state = "test1 alerted";
        alert("Trigger Alert Hello World");
    }
    return state;
}

const test2Reducer = function(state = "test2", action){
    if (action.type == "alert2"){
        state = "test2 alerted";
        alert("Trigger Alert Hello World");
    }
    return state;
}
 

const rootReducer = combineReducers({
    "test1": test1Reducer,
    "test2": test2Reducer
});

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <AppComponent />
        </Provider>
    </div>, 
    document.getElementById('app')
);

    
