import * as React from "react";

export class ComponentTesta extends React.Component<any, any>{

    parent;

    constructor(props){
        super(props);
        this.state = {
            label: "Component Test A"
        };
        this.props = props;
        this.parent = props.getParent();
    }

    doSomething(){
        this.parent.removeComponent(this);
    }

    onDragStart(){
        console.log("dragged");
    }

    render(){
        this.state.label;
        return (
            <div style={{border: "1px solid"}} draggable={true} onDragStart={this.onDragStart.bind(this)} >
                {this.state.label}
                <button onClick={this.doSomething.bind(this)}>Do Something</button>
            </div>
        );
    }
}