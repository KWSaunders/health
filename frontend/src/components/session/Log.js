import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 360,
    },
});

export default function Log(props) {
    const classes = useStyles();

    return (
        <div>
            <h3>
                Session Log
            </h3>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="center">Reps</TableCell>
                        <TableCell align="center">Weight</TableCell>
                        <TableCell align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.sets.map((set, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {set.exercise}
                            </TableCell>
                            <TableCell align="center">{set.reps}</TableCell>
                            <TableCell align="center">{set.weight}</TableCell>
                            <TableCell align="center">{new Date(set.date).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}