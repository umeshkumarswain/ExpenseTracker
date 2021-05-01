import React from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar, Slide, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {Delete,MoneyOff} from '@material-ui/icons'
import useStyle from "./styles";


const List = () => {
    const classes = useStyle();
    const transactions= [
        {id:1,type:'Income',category:'Salary',amoumt:'50',date:new Date()},
        {id:2,type:'Expense',category:'Food',amoumt:'50',date:new Date()},
        {id:3,type:'Income',category:'Salary',amoumt:'50',date:new Date()},
        {id:4,type:'Expense',category:'Travel',amoumt:'50',date:new Date()},
    ];

    return (
        <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick='{() => deleteTransaction(transaction.id)}'>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
    )
}
export default List;
