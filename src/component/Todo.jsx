import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from "./TodoList.module.css"

const Todo = () => {
    const [todos, setTodos] = React.useState([]);

    const addTodo=(newTodo)=> {
        setTodos([...todos,newTodo])
    }

    const handleDelete=(id)=> {
        setTodos(todos.filter(todo=> todo.id!=id))
    }
    // console.log(todos)
  return (
    <div className={styles.fullBox}>
        <h1>Todo</h1>
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos} handleDelete={handleDelete}/>

        
    </div>
  )
}

export default Todo