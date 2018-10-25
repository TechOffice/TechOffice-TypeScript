import React = require("react");
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

export default class PagingTableComponent extends React.Component<any, any>{
    
    render(){
        return (
            <Paper>
                <TablePagination 
                    count={20}
                    page={1} 
                    rowsPerPage = {5}
                    onChangePage={()=>null}/>
            </Paper>
        )
    }
}