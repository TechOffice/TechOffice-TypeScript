import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./SimpleFormComponent";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
    form: reducer
});

const store = createStore(rootReducer);

class App extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <SimpleFormComponent/>
                <div>
                </div>
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));

    
