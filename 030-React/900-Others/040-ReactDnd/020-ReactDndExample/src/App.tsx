import * as React from "react";
import * as ReactDOM from "react-dom";
import Square from "./Square";
import Knight from "./Knight";
import Board from "./Board";

class App extends React.Component{
    
    render(){
        return (
            <Board knightPosition={[7,4]}>
            </Board>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
