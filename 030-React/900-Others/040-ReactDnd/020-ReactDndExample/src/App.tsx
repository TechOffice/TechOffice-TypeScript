import * as React from "react";
import * as ReactDOM from "react-dom";
import Square from "./Square";
import Knight from "./Knight";
import Board from "./Board";
import { knightPosition } from "./knightPosition";
import { observer } from "./Observer";

class App extends React.Component{
    
    render(){
        return (
            <Board knightPosition={knightPosition.getPosition()}>
            </Board>
        )
    }

}

observer.setObserver(function(){
    ReactDOM.render(
        <Board knightPosition={knightPosition.getPosition()}/>, 
        document.getElementById('app')
    );    
});

    
