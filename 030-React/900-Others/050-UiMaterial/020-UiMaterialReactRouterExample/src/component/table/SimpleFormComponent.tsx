import * as React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

export default class SimpleFormComponent extends React.Component<any, any>{

    render(){
        return(
            <Paper>
                <h1>Simple Form</h1>
                <form noValidate autoComplete="off">
                    <TextField label="Name"/>
                </form>
            </Paper>
        );
    }
}