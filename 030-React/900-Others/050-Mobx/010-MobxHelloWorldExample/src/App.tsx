import * as React from "react";
import * as ReactDOM from "react-dom";
import {observer} from "mobx-react";
import {observable} from "mobx"

@observer
class App extends React.Component<any, any>{
    
    @observable secondsPassed = 0;
    
    constructor(props){
        super(props);
    }

    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++
        }, 1000)
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <span>Seconds passed: { this.secondsPassed } </span> 
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

