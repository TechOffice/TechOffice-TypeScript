import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * 
 * Mounting
 *      contructor()
 *      componentWillMount()
 *      render()
 *      componentDidMount()
 * 
 * Updating
 * 		componentWillReceiveProps()
 * 		shouldComponentUpdate()
 * 		componentWillUpdate()
 * 		render()
 * 		componentDidUpdate()
 * 
 * Unmounting
 * 		componentWillUnmount()
 */
class App extends React.Component{
    
    constructor(props){
        super(props);
        console.log("contractor call");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount call");
    }

    componentDidMount(){
        console.log("componentDidMount call");    
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

    
