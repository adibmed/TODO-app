import React, {useState} from "react";
import "./Todo.css";
import {
  ListItemText,
  ListItem,
  List,
  ListItemAvatar,
  Avatar, 
  Modal,
  Button,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { db } from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { makeStyles } from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [input,  setInput] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }
  
  const updateTodo = (event) => {
    event.preventDefault();
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set({
      todo: input
    }, {merge: true})

    setOpen(false)
  }

  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
      >
      <div className={classes.paper}>
      <h1>I am a modal</h1>
      <form>
      <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}></input>
      <Button type="submit" disabled={!input} onClick={updateTodo}>Update Todo</Button>
      </form>
      </div>
    </Modal>
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          <Avatar> <FolderIcon /></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" />
      
      </ListItem>  
      <IconButton edge="end" aria-label="delete">
        <EditIcon className="todo__edit" onClick={e => setOpen(true)}/>
      </IconButton>

       <IconButton edge="end" aria-label="delete">
        <DeleteIcon className="todo__delete"
        onClick={(evene) => {
          db.collection("todos").doc(props.todo.id).delete();
        }}/>
      </IconButton>
    </List>

    
    </>
  );
}

export default Todo;
