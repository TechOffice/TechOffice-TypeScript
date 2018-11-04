import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";
import { Route } from "react-router";
import { Component } from "react";
import * as React from "react";
import * as Loadable from 'react-loadable/lib/index';
import Home from "./component/Home";
import Component1 from "./component/Component1";

class App extends Component{
    
    render(){

        return (
            <div>
                <h1>Hello World</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Component1">Compoent1</Link></li>
                </ul>
            </div>            
        )
    }
}


ReactDOM.render(  
    <MemoryRouter>
        <div>
            <App/>
            <Route exact path="/" component={Home}/>
            <Route path="/Component1" component={Component1}/>
        </div>
    </MemoryRouter>
, document.getElementById("app"));


    
