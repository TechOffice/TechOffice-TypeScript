import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./SimpleFormComponent";

const rootReducer = combineReducers({
    form: reducer
});

class App extends React.Component{
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <SimpleFormComponent/>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
