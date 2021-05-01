import React,{useState, useContext} from 'react'
import useStyles from './styles';
import { FormControl, Grid, InputLabel, Select, TextField, Typography,MenuItem,Button } from '@material-ui/core'
import   ExpenseTrackerContext  from "../../../context/context";
import { v4 as uuidv4 } from 'uuid';
import {  incomeCategories,expenseCategories} from "../../../constants/categories";
import  formatDate  from "../../../utils/formatDate";
const Form = () => {
    const initialState=[
        {amount:'',category:'',type:'Income',date:formatDate(new Date())}
    ];
    const classes = useStyles();
    const [formData,setformData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        const transaction = {...formData,amount:Number(formData.amount),id:uuidv4()}
        addTransaction(transaction);
        setformData(initialState);
    }
   const selectedCatagories = formData.type === 'Income' ?incomeCategories:expenseCategories ;



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
                    <Select 
                    value={formData.type}
                    onChange = {(e)=>setformData({...formData,type:e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth >
                    <InputLabel>Category</InputLabel>
                    <Select
                        value = {formData.category}
                        onChange = {(e) => setformData({...formData,category:e.target.value
                        })}
                    >
                        {
                            selectedCatagories.map((c)=>
                                <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth 
                value = {formData.amount}
                onChange = {(e) => setformData({...formData,amount:e.target.value})}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField type='date' label='Date' fullWidth 
                    value = {formData.date}
                    onChange = {(e) => setformData({...formData,date:formatDate(e.target.value)})}
                />
            </Grid>
            <Button className={classes.button}
                variant='outlined'
                color='primary' fullWidth 
                onClick = {createTransaction}
                >
                Create
            </Button>
        </Grid>
    )
}
export default Form;