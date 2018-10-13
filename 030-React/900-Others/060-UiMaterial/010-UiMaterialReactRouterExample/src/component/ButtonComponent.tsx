import React = require("react");
import Button from "@material-ui/core/Button";

export default class ButtonComponent extends React.Component<any, any>{

    render(){
        return (
            <div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}