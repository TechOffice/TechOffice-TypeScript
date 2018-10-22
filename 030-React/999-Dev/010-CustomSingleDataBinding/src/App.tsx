
import * as ReactDOM from "react-dom";
import { Component } from "./base/Component";
import * as React from "react";
import { Store } from "./base/Store";
import { ChildElement1 } from "./ChildElement1";
import { singleStore } from "./SingleStore";

class App extends Component<any, any> {

    constructor(props){
        super(props);
        this.state = {};
        this.store = singleStore;        
    }

    onClick(){
        this.store.update({data: "abc"})
    }

    render(){
        return (
            <div>
                <h1>Hello World {this.state.data}</h1>
                <div><button onClick={this.onClick.bind(this)}>Click me!</button></div>
                <ChildElement1/>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
