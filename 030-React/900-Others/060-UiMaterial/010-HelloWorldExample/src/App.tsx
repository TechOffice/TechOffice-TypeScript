import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';


class App extends React.Component{
    
    render(){
        return (
            <div>
                <Button variant="contained" color="primary">
                Hello World
                </Button>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
