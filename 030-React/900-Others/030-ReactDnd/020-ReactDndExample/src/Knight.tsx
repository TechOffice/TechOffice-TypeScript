import { Component } from "react";
import * as React from "react";
import { DragSource } from "react-dnd";
import { knightSpec } from "./KnightSpec";
import { kightCollect } from "./KnightCollect";


class Knight extends Component<any, any> {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    );
  }
}

export default DragSource("knight", knightSpec, kightCollect)(Knight);
