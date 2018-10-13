import React = require("react");
import { State } from "../store/State";
import { ActionKey } from "../store/action/ActionKey";
import { connect } from "react-redux";

const mapStateToProps = function(state){
    return {
        counter: state.counter
    };
}

 const mapDispatchToProps = function(dispatch){
    return {
		onClick: function(n){
			dispatch({
                type: ActionKey.INCREASE_COUNTER,
                n: n
            })
		}
	};
}


const ChildComponent = connect(mapStateToProps, mapDispatchToProps)(
    class ChildComponent extends React.Component<any, State>{
    
        constructor(props){
            super(props);
        }
        
        render(){
            return (
                <div>
                    <h2> Child Component </h2>
                    <button onClick={this.props.onClick.bind(this, 1)}>Add</button>
                    <div>Number: {this.props.counter}</div>

                </div>            
            )
        }
    
    }
);

export default ChildComponent;