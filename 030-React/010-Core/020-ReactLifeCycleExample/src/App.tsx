import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component{
    
    constructor(props){
        super(props);
        console.log("contractor call");
    }

    componentDidMount(){
        console.log("componentDidMount call");    
    }

    componentWillUnmount() {
        console.log("componentWillUnmount call");
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

    
