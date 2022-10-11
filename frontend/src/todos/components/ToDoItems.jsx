import React, { useMemo } from 'react'
import {
  Card,
  CardContent,
  List,
  Typography,
} from '@mui/material'
import TodoItem from './TodoItem'

const TodoItems = ({ style, data, onSelectTodo }) => {
  const renderedTodoItems = useMemo(() => {
    const onClickTodo = (id) => onSelectTodo(data[id]);
    return Object.keys(data).map((key) => {
      const { id, title } = data[key];
      return <TodoItem key={id} id={id} title={title} onClickTodo={onClickTodo} />
    });
  }, [data, onSelectTodo]);
  return (
    <Card style={style}>
      <CardContent>
        <Typography component='h2'>My Todo Lists</Typography>
        <List>
          { renderedTodoItems }
        </List>
      </CardContent>
    </Card>
  )
}

export default TodoItems;
