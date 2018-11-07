import React = require("react");
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
export default class AppComponent extends React.Component<any, any>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    {this.props.test1}
                </div>
                <div>
                    {this.props.test2}
                </div>
                <div><button onClick={()=>this.props.alert1()}>Trigger Redux Test1 Reducer</button></div>
                <div><button onClick={()=>this.props.alert2()}>Trigger Redux Test2 Reducer</button></div>
            </div>            
        )
    }

}