import * as React from "react";
import { Store } from "./Store";


export class Component<P, S> extends React.Component<P, S>{
    
    store: Store;

    constructor(props){
        super(props);
    }

    componentWillMount(){
        if (this.store){
            this.store.addStateTrigger(this.setState.bind(this));
        }
    }

    componentWillUnmount(){
        if (this.store){
            this.store.removeStateTrigger(this.setState.bind(this));
        }
    }
    
}