import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import { Reducer } from "./store/reducer";
import { createStore } from "redux";
import { ActionKey } from "./store/action/ActionKey";


@(connect( 
    // map state to props
    function(state: any){
        return {
            counter: state.counter
        }
    },
    // map dispatch to props
    function(dispatch){
        return {
            onClick: function(n){
                dispatch({
                    type: ActionKey.INCREASE_COUNTER,
                    n: n
                })
            }
        }
    }
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <button onClick={this.props.onClick.bind(this, 1)}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
            </div>            
        )
    }

}

const store = createStore(Reducer, {counter: 0});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


