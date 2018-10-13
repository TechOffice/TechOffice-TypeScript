import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import { MemoryRouter, Route } from "react-router";
import ButtonComponent from "./component/ButtonComponent";
import { Link } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";


class App extends React.Component{
    
    render(){
        return (
            <div>
                <h1>
                    UI Material Example
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/button">Button</Link></li>
                </ul>
                </h1>
            </div>            
        )
    }

}

ReactDOM.render(
    <MemoryRouter>
        <div>
        <App />
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/button" component={ButtonComponent}/>
        </div>
    </MemoryRouter>, 
document.getElementById('app'));

    
