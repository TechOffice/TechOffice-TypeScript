import { Component } from "./base/Component";
import * as React from "react";
import { singleStore } from "./SingleStore";


export class ChildElement1 extends Component<any, any>{
    constructor(props){
        super(props);
        this.state = {};
        this.store = singleStore;        
    }

    render(){
        return (
            <div>Child Element 1: {this.state.data}</div>
        )
    }
}