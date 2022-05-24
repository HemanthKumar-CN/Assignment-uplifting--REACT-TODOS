import React from 'react'
import styles from "./TodoList.module.css"
const TodoList = ({ todos, handleDelete }) => {

    const [completed, setCompleted] = React.useState([])




    return (
        <>
            <div >
                {
                    todos.map(todo => {
                        return (
                            <div className={styles.dot} key={todo.id}>
                                <input onChange=
                                {(e) => 
                                    {
                                    console.log(e.target.checked)
                                    if (e.target.checked == true) 
                                    {
                                        setCompleted([...completed, todo])
                                        handleDelete(todo.id)
                                    }

                                    // console.log(completed)
                                    
                                   }

                                } type="checkbox" name="" id="" />
                                {todo.value}
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>


                            </div>)
                    })
                }
            </div>
            <h3>Completed</h3>
            <div >

                {
                    completed.map(items => {
                        return (<div className={styles.striked} key={items.id}>{items.value}</div>)
                    })
                }
            </div>
        </>
    )
}

export default TodoList