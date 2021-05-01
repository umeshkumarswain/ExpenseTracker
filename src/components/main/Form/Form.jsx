import React from 'react'
import useStyles from './styles';
import { FormControl, Grid, InputLabel, Select, TextField, Typography,MenuItem,Button } from '@material-ui/core'

const Form = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth >
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income"></MenuItem>
                        <MenuItem value="Expense"></MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth >
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="Category 1"></MenuItem>
                        <MenuItem value="Category 2"></MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth />
            </Grid>
            <Button className={classes.button}
                variant='outlined'
                color='primary' fullWidth >
                Create
            </Button>
        </Grid>
    )
}
export default Form;