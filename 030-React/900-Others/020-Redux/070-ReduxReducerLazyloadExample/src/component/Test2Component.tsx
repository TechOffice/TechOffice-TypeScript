import React from "react";
import { connect } from "react-redux";

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
export default class Test2Component extends React.Component<any, any>{

    render(){
        return (
            <div>
                <h1>Test 2 Component</h1>
                <div>
                    <button onClick={()=>this.props.alert1()}>alert</button>
                </div>
            </div>
        );
    }
}