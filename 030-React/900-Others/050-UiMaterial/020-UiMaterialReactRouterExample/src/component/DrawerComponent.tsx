import React = require("react");
import { Route } from "react-router";
import PermanentDrawerComponent from "./drawer/PermanentDrawerComponent";
import { Link } from "react-router-dom";
import ResponsiveDrawerComponent from "./drawer/ResponsiveDrawerComponent";
import TemporaryDrawerComponent from "./drawer/TemporaryDrawerComponent";


export default class DrawerComponent extends React.Component<any, any>{
    
    render(){
        return (
            <div>
                <b>DrawerComponent</b>
                <ul>
                    <li><Link to="/drawer/permanent">Permanent</Link></li>
                    <li><Link to="/drawer/responsive">Responsive</Link></li>
                    <li><Link to="/drawer/temporary">Temporary</Link></li>
                </ul>
                <Route path="/drawer/permanent" component={PermanentDrawerComponent}/>
                <Route path="/drawer/responsive" component={ResponsiveDrawerComponent}/>
                <Route path="/drawer/temporary" component={TemporaryDrawerComponent}/>

            </div>
        );
    }
}