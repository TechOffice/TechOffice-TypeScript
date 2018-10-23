import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import { MemoryRouter, Route } from "react-router";
import ButtonComponent from "./component/ButtonComponent";
import { Link } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SendIcon from '@material-ui/icons/Send';
import ListItemText from "@material-ui/core/ListItemText";

class App extends React.Component{
    
    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" >
                            Tech Framework
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <SendIcon/>
                            </ListItemIcon > 
                            <ListItemText inset primary="Item 1"/>
                        </MenuItem>
                    </MenuList>
                </Paper>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/button">Button</Link></li>
                </ul>
                
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

    
