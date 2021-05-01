import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import Details from './components/Details/Details'
import useStyles from './styles';
import Main from "./components/main/main";

function App() {
  const classes = useStyles();
  return (
    <Grid 
    className={classes.grid}
    container spacing={0} 
    alignItems="center"
    justify="center"
    style={{height:'100vh'}}>
      <Grid item xs={12} sm={4}>
        <Details title="Income"></Details>
      </Grid>
      <Grid item xs={12} sm={3}>
       <Main></Main>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Details title="Expense">></Details>
      </Grid>
    </Grid>
  );
}

export default App;
