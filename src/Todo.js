import React, {useState} from "react";
import "./Todo.css";
import {
  ListItemText,
  ListItem,
  List,
  ListItemAvatar,
  Avatar, 
  Modal,
} from "@material-ui/core";
import { db } from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }
 

  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}>
        <h1>I am a modal</h1>
    </Modal>
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" />
      </ListItem>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverIcon
        onClick={(evene) => {
          db.collection("todos").doc(props.todo.id).delete();
        }}
      />
    </List>
    </>
  );
}

export default Todo;
