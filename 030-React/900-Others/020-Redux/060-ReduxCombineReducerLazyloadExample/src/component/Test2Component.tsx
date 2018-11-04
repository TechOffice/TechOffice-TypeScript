import React from "react";
import { connect } from "react-redux";

@(connect( 
    function(state: any){
        return state;
    },
    function(dispatch){
        return{
            alert1: function(){
                dispatch({type: "alert1"});
            },
            alert2: function(){
                dispatch({type: "alert2"});
            }
        };
    }
) as any)
export default class Test2Component extends React.Component<any, any>{

    render(){
        return (
            <div>
                <h1>Test 1 Component</h1>
            </div>
        );
    }
}