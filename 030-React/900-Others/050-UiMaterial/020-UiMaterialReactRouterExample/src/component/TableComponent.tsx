import * as React from "react";
import Paper from "@material-ui/core/Paper";

import { Route } from "react-router";
import SimpleTableComponent from "./table/SimpleTableComponent";
import PagingTableComponent from "./table/PagingTableComponent";
import { Link } from "react-router-dom";

export default class TableComponent extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <h1>Table</h1>
                <ul>
                    <li><Link to="/table/simpleTable">Simple Table</Link></li>
                    <li><Link to="/table/pagingTable">Paging Table</Link></li>
                </ul>
                <Route path="/table/simpleTable" component={SimpleTableComponent}/>
                <Route path="/table/pagingTable" component={PagingTableComponent}/>
            </Paper>
        )
    }
}