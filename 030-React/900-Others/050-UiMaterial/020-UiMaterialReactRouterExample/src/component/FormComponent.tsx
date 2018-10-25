import * as React from "react";
import { Route } from "react-router";
import SimpleFormComponent from "./table/SimpleFormComponent";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

export default class FormComponent extends React.Component<any, any>{
    
    render(){
        return(
            <Paper>
                <h1>Form</h1>
                <ul>   
                    <li><Link to="/form/simpleForm">Simple Form</Link></li>
                </ul>
                <Route path="/form/simpleForm" component={SimpleFormComponent}/>
            </Paper>
        );
    }
}