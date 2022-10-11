import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'

const TodoItem = ({ id, title, onClickTodo }) => {
  const onClick = () => onClickTodo(id);
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  )
}

export default TodoItem;
