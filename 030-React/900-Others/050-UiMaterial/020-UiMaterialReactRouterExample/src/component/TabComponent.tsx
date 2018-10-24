import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class TabComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            tabItemNum: 0
        }
    }

    render(){
        return (
            <div>
                <h1>Tab</h1>
                <div>
                    <AppBar position="static">
                        <Tabs value={this.state.tabItemNum} onChange={(event, value)=>this.setState({tabItemNum: value})}>
                            <Tab label="Tab 1"></Tab>
                            <Tab label="Tab 2"></Tab>
                        </Tabs>
                    </AppBar>
                    <div>
                        Selected Tab Num: {this.state.tabItemNum + 1}
                    </div>
                    {this.state.tabItemNum === 0 && <div>Item One</div>}
                    {this.state.tabItemNum === 1 && <div>Item Two</div>}
                </div>
            </div>
        )
    }
}