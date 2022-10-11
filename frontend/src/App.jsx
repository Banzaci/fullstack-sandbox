import React from 'react'
import { TodoLists } from './todos/components/TodoLists'
import Layout from './Layout'

const App = () => {
  return (
    <Layout>
      <TodoLists style={{ margin: '1rem' }} />
    </Layout>
  )
}

export default App
