import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/car";
import { Grid, Paper, TableContainer, TableBody, TableHead, TableRow, TableCell, withStyles} from "@material-ui/core";
import CarsForm from './CarsForm';

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Cars = ({classes,...props}) => {

    useEffect(() => {
        props.fetchAllCars()
        
    }, [])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <CarsForm/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <TableHead className={classes.root}>
                            <TableRow>
                                <TableCell>Consecutivo</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Detalle</TableCell>
                                <TableCell>Trm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.carList.map((record, index) =>{
                                    return(
                                        <TableRow key={index} hover>
                                            <TableCell>{record.consecutivo}</TableCell>
                                            <TableCell>{record.valor}</TableCell>
                                            <TableCell>{record.detalle}</TableCell>
                                            <TableCell>{record.trm}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        
    )
}


const mapStateToProps = state =>{
    return {
        carList: state.car.list
    }
}

const mapActionToProps = {
    fetchAllCars : actions.fetchAll
    
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Cars));
