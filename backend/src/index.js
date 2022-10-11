const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let todoList = {
  '0000000001': {
    id: '0000000001',
    title: 'First List',
    todos: [],
  },
  '0000000002': {
    id: '0000000002',
    title: 'Second List',
    todos: [],
  },
}

const PORT = 3001

app.get('/', (_, res) => res.send(todoList))

app.post('/', (req, res) => {
  const { id, todos } = req.body;
  const selectedTodo = todoList[id]
  todoList = {
    ...todoList,
    [id]: {
      ...selectedTodo,
      todos,
    }
  }
  res.send(todoList)
})

app.put('/', (req, res) => {
  const { id, todos } = req.body;
  const selectedTodo = todoList[id]
  todoList = {
    ...todoList,
    [id]: {
      ...selectedTodo,
      todos,
    }
  }
  res.send(todoList)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
