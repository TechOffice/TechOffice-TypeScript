import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import { MemoryRouter, Route } from "react-router";
import ButtonComponent from "./component/ButtonComponent";
import { Link } from "react-router-dom";
import DrawerComponent from "./component/DrawerComponent";
import TableComponent from "./component/TableComponent";
import TabComponent from "./component/TabComponent";


class App extends React.Component{
    
    render(){
        return (
            <div>
                <h1>
                    UI Material Example
                    <ul>
                    <li><Link to="/button">Button</Link></li>
                    <li><Link to="/Table">Table</Link></li>
                    <li><Link to="/Tab">Tab</Link></li>
                    <li><Link to="/drawer">Drawer</Link></li>
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
            <Route exact path="/" render={ () => (<div></div>)}/>
            <Route path="/button" component={ButtonComponent}/>
            <Route path="/table" component={TableComponent}/>
            <Route path="/tab" component={TabComponent}/>
            <Route path="/drawer" component={DrawerComponent}/>
        </div>
    </MemoryRouter>, 
document.getElementById('app'));

    
