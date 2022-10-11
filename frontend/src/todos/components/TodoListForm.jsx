import React, { useState } from 'react'
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ToDoField from './ToDoField';

export const TodoListForm = ({ todoList, saveTodoList, onDeleteTodo }) => {
  const [todos, setTodos] = useState(todoList.todos)

  const generateNewTodo = (index, todoProp) => {
    const newTodoList = [
      ...todos.slice(0, index),
      {
        ...todos[index],
        ...todoProp
      },
      ...todos.slice(index + 1),
    ]
    return newTodoList;
  }

  const saveNewTodoList = (newTodoList) => {
    setTodos(newTodoList);
    saveTodoList(todoList.id, newTodoList);
  }
  
  const onHandleOnChange = (index, title) => {
    if(title.length === 0) return;
    saveNewTodoList(
      generateNewTodo(index, {
        title,
      })
    )
  }

  const onAddTodo = () => {
    saveNewTodoList([
      ...todos,
      { title: '', completed: false }
    ])
  }

  const onToggleDone = (index) => {
    saveNewTodoList(
      generateNewTodo(index, {
        completed: !todos[index].completed,
      })
    )
  }

  const onDelete = (index) => {
    const newTodoList = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]
    setTodos(newTodoList);
    onDeleteTodo(todoList.id, newTodoList);
  }

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>
          {todoList.title}
        </Typography>
        <form
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
          {todos.map((todo, index) => (
            <ToDoField
              key={index}
              onDelete={onDelete}
              title={todo.title}
              completed={todo.completed}
              index={index}
              onHandleOnChange={onHandleOnChange}
              onToggleDone={onToggleDone}
            />
          ))}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={onAddTodo}
            >
              Add Todo <AddIcon />
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}
