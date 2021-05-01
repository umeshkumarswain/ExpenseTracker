import React from 'react'
import {Card,CardHeader,CardContent,Typography, Divider} from '@material-ui/core';
import useStyles from './styles'
import {Grid} from '@material-ui/core';
import Form from './Form/Form'
import List from './list/List'

const Main = () => {
    const  classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardHeader title='Expense Tracker' subheader='Powered By speechly'/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Typography align='center' variant='subtitle1'
            style={{lineHeight:'1.5em',marginTop:'20px'}}
            >Total Balance $100</Typography>
            <Divider></Divider>
            <Form></Form>
        </CardContent>

        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default Main;