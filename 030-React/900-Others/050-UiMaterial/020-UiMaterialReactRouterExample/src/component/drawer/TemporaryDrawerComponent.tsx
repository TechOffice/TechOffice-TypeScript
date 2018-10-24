import React = require("react");
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

export default class TemporaryDrawerComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            open: true
        }
    }

    render(){
        return(
            <div>
                <Button variant="contained" onClick={()=>this.setState({open: true})}>Open Temporary Drawer</Button>
                <Drawer anchor="left" open={this.state.open} onClose={()=>this.setState({open: false})}>
                    Temporary Drawer
                </Drawer >
            </div>
        );
    }
}