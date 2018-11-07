import * as ReactDOM from "react-dom";
import AppComponent from "./component/AppComponent";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MemoryRouter } from "react-router";
import React from "react";

const rootReducer = function(state: any, action: any){
    return state;
};

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <MemoryRouter>
                <AppComponent />
            </MemoryRouter>
        </Provider>
    </div>, 
    document.getElementById('app')
);

    
