import React from 'react'
import { TextField, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/CheckCircle'

const ToDoField = ({ onHandleOnChange, onToggleDone, onDelete, index, title, completed }) => {
  const checkBoxColor = completed ? 'green' : 'grey';
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ margin: '8px' }} variant='h6'>
        {index + 1}
      </Typography>
      <TextField
        sx={{ flexGrow: 1, marginTop: '1rem' }}
        label='What to do?'
        value={title}
        disabled={completed}
        onChange={(event) => onHandleOnChange(index, event.target.value)}
      />
      <Button
        sx={{ margin: '8px 0' }}
        size='small'
        style={{ color: '#8b0000'}}
        onClick={() => onDelete(index)}
      >
        <DeleteIcon />
      </Button>
      <Button
        sx={{ margin: '8px 0' }}
        size='small'
        onClick={() => onToggleDone(index)}
      >
        <CheckIcon style={{ color: checkBoxColor }} />
      </Button>
    </div>   
  )
}

export default ToDoField;