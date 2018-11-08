import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./SimpleFormComponent";
import { Provider, connect } from "react-redux";

const rootReducer = combineReducers({
    form: reducer
});

const store = createStore(rootReducer);

const mapStateToProp = function(state){
    console.log(state);
    return {simple: state && state.form && state.form.simple && state.form.simple.values ? state.form.simple.values : {} };
} 

const mapDispatchToProp = function(dispatch){
    return {};
}

class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                    <SimpleFormComponent/>
                <div>
                    {this.props.simple.firstName}
                </div>
            </div>            
        )
    }
}

const ConnectedApp = connect(mapStateToProp, mapDispatchToProp)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>, 
document.getElementById('app'));

    
