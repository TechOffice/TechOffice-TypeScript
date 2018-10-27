import * as React from "react";
import * as ReactDOM from "react-dom";
import store from "./store/Store";
import { ActionKey } from "./store/action/ActionKey";

console.log(store.getState());
console.log(store.dispatch({type: ActionKey.INCREASE_COUNTER, n: 10}));
console.log(store.getState());
console.log(store.dispatch({type: ActionKey.DECREASE_COUNTER, n: 5}));
console.log(store.getState());

class App extends React.Component<any, any>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
