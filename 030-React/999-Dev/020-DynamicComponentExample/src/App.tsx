import * as React from "react";
import * as ReactDOM from "react-dom";
import { ComponentTesta } from "./component/ComponentTesta";

class App extends React.Component<any, any>{
    
    components;
    componentInstances;

    constructor(props){
        super(props);
        this.componentInstances = [];
        this.components = [
            <ComponentTesta key={`1`} getParent={this.getInstance.bind(this)} ref={c => {this.componentInstances.push(c)}}/>, 
            <ComponentTesta key={`2`} getParent={this.getInstance.bind(this)} ref={c => {this.componentInstances.push(c)}}/>
        ]
        
        this.state = {
            components: this.components
        }
    }

    removeComponent(c){
        var index = this.componentInstances.indexOf(c);
        this.components.splice(index, 1);
        this.componentInstances.splice(index, 1);
        this.setState({components: this.components});
    }

    getInstance(){
        return this;
    }

    doSomething(){
        this.setState({components: []});
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.doSomething.bind(this)}>do something</button>
                {this.state.components.map(item=>(item))}
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
