import React from "react"
import './Todo.css'
import {ListItemText,ListItem, List, ListItemAvatar, Avatar} from "@material-ui/core"
function Todo(props) {
  return ( 
    <List className="todo__list">
    <ListItem>
        <ListItemAvatar>
            <Avatar> 
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo} secondary="Deadline ⏰" />
    </ListItem>
    </List> 
  );
}

export default Todo;
