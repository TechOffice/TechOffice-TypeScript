import React from "react";
import { Route } from "react-router";
import Loadable from 'react-loadable';

export default class AppComponent extends React.Component<any, any>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Route exact path="/" component={
                    Loadable({
                        loader: () => import("./Test1Component"),
                        loading: () => <div>loading</div>
                    })
                }/>
                <Route path="/Component1" component={
                    Loadable({
                        loader: () => import('./Test2Component'),
                        loading: () => <div>loading</div>
                    })
                }/>
            </div>            
        )
    }

}