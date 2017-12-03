import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapStateToProps } from "./store/MapStateToProps";
import { connect, Provider } from "react-redux";
import { MapDispatchToProps } from "./store/MapDispatchToProps";
import { Reducer } from "./store/reducer";
import { createStore } from "redux";
import { State } from "./store/State";

export interface Props {
    counter: number,
    onClick: (n: number) => void
}

class App extends React.Component<Props, State>{
    
    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
        debugger;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <button onClick={this.props.onClick.bind(event, 1)}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
            </div>            
        )
    }

}

const ConnectedApp = connect(MapStateToProps, MapDispatchToProps)(App);

const store = createStore(Reducer, {counter: 0});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>, 
document.getElementById('app'));


