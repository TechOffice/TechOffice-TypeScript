import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

export default class SimpleTableComponent extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title 1</TableCell>
                            <TableCell>Title 2</TableCell>
                            <TableCell>Title 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Row 1 Item 1</TableCell>
                            <TableCell>Row 1 Item 2</TableCell>
                            <TableCell>Row 1 Item 3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Row 2 Item 1</TableCell>
                            <TableCell>Row 2 Item 2</TableCell>
                            <TableCell>Row 2 Item 3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Row 3 Item 1</TableCell>
                            <TableCell>Row 3 Item 2</TableCell>
                            <TableCell>Row 3 Item 3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}