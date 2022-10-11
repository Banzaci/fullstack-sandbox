import React, { Fragment, useState, useEffect } from 'react'
import { TodoListForm } from './TodoListForm'
import TodoItems from './ToDoItems'
import { postUpdateTodoList, loadTodoList } from '../../utils/api'
import debounce from '../../utils/debounce'
import { Card } from '@mui/material'

export const TodoLists = ({ style }) => {
  const [todoLists, setTodoLists] = useState({})
  const [activeList, setActiveList] = useState();
  
  useEffect(() => {
    (async () => {
      const response = await loadTodoList();
      setTodoLists(response);
    })()
  }, [])

  const onUpdateTodoList = async (id, todos) => {
    const response = await postUpdateTodoList({ id, todos })
    setTodoLists(response);
  };

  const onChange = debounce((id, todos) => onUpdateTodoList(id, todos));

  const onSelectTodo = (todo) => setActiveList(todo);
  
  if (Object.keys(todoLists).length === 0) return <Card>There is nothing todo.</Card>
  
  return (
    <Fragment>
      <TodoItems data={todoLists} style={style} onSelectTodo={onSelectTodo} />
      {activeList && (
        <TodoListForm
          key={activeList.id} // use key to make React recreate component to reset internal state
          todoList={activeList}
          saveTodoList={(id, todos) => onChange(id, todos)}
          onDeleteTodo={(id, todos) => onUpdateTodoList(id, todos)}
        />
      )}
    </Fragment>
  )
}
