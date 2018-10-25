import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";

export default class DialogComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    render(){
        return (
            <Paper>
                <h1>Dialog</h1>
                <Button variant="contained" onClick={()=> this.setState({open: true})}>Open Dialog</Button>
                <Dialog open={this.state.open} onClose={()=>this.setState({open: false})}>
                    <DialogTitle>Dialog Example</DialogTitle>
                </Dialog>
            </Paper>
        )
    }
}