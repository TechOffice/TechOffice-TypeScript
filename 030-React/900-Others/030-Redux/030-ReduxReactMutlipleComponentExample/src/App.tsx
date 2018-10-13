import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { Reducer } from "./store/reducer";
import { createStore } from "redux";
import { State } from "./store/State";
import ChildComponent from "./component/ChildComponent";
import { ActionKey } from "./store/action/ActionKey";

export interface Props {
    counter: number,
    onClick: (n: number) => void
}

export const mapStateToProps = function(state){
    return {
        counter: state.counter
    };
}

export const mapDispatchToProps = function(dispatch){
    return {
		onClick: function(n){
			dispatch({
                type: ActionKey.INCREASE_COUNTER,
                n: n
            })
		}
	};
}

const App = connect(mapStateToProps, mapDispatchToProps)(
    class App extends React.Component<Props, State>{
        
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
                    <ChildComponent/>
                </div>            
            )
        }

    }
);

const store = createStore(Reducer, {counter: 0});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


