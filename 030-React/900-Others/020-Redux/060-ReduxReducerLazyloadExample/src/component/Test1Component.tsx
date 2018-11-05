import { connect } from "react-redux";
import React from "react";

@(connect( 
    function(state: any){
        return state;
    },
    function(dispatch){
        return{
            alert: function(){
                dispatch({type: "alert"});
            }
        };
    }
) as any)
export default class Test1Component extends React.Component<any, any>{

    render(){
        return (
            <div>
                <h1>Test 1 Component</h1>
                <div>
                    <button onClick={()=>this.props.alert1()}>alert</button>
                </div>
            </div>
        );
    }
}