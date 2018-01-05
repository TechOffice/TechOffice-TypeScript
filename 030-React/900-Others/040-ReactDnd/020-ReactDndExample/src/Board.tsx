import { Component } from "react";
import * as React from "react";
import Knight from "./Knight";
import Square from "./Square";

export default class Board extends Component<any, any> {
    
    renderSquare(i){
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;
        const [knightX, knightY] = this.props.knightPosition;
        let piece = null;
        if (x === knightX && y === knightY) {
            piece = <Knight /> ;
        }
        console.log(i + " " + y + " " + x + " " + black);
        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <Square black={black}>
                    {piece}
                </Square>
            </div>
        );
    }

    render(){
        const squares = [];
        for (let i = 0; i < 64; i++) {
          squares.push(this.renderSquare(i));
        }
        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}