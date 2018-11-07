import React from "react";
import { Route } from "react-router";
import { asyncComponent } from 'react-async-component';
import { Link } from "react-router-dom";

export default class AppComponent extends React.Component<any, any>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <ul>
                    <li><Link to="/">Test1Component</Link></li>
                    <li><Link to="/Component1">Test2Component</Link></li>
                </ul>
                <Route exact path="/" component={
                    asyncComponent({
                        resolve: () => new Promise<any>(function(resolve){resolve(import('./Test1Component'))})
                    })
                }/>
                <Route path="/Component1" component={
                    asyncComponent({
                        resolve: () => new Promise<any>(function(resolve){resolve(import('./Test2Component'))})
                    })
                }/>
            </div>            
        )
    }

}