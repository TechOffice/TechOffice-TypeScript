import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component{
    
    constructor(props){
        super(props);
        
    }

    doSomething(){

    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.doSomething}>Click</button>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
