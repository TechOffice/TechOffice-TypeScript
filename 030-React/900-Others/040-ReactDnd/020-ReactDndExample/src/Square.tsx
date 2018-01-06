import { Component } from "react";
import * as React from "react";
import { DropTarget } from "react-dnd";
import { squareCollect } from "./SquareCollect";
import { squareSpec } from "./SquareSpec";

class Square extends Component<any, any> {
    render() {
        const { black, x, y, connectDropTarget, isOver, } = this.props;
        const fill = black ? 'black' : 'white';
        const stroke = black ? 'white' : 'black';
        return connectDropTarget(<div style={{ 
            backgroundColor: fill,
            color: stroke,
            width: '100%',
            height: '100%'}} >
            {this.props.children}
        </div>);
    }
  }

  export default DropTarget<any>("knight", squareSpec, squareCollect)(Square);

  