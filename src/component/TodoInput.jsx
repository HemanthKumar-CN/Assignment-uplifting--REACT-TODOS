import React from 'react'
import styles from "./TodoList.module.css"

const TodoInput = ({addTodo}) => {
    const [value, setValue] = React.useState("")

    const handleKey=(e)=> {
      if(e.key=="Enter")
      {
        let val={
          id:Date.now(),
          value:value
      }
      addTodo(val)
      setValue("")
      }
    }

  return (
    <div >
        <input style={{ backgroundColor:"#839476"}} onKeyDown={handleKey} className={styles.font} type="text" placeholder="Add to-do..." onChange={(e)=> setValue(e.target.value)} value={value}  />
        <div></div>
        {/* <button onClick={()=> {
            let val={
                id:Date.now(),
                value:value
            }
            addTodo(val)
            setValue("")
        }}>Add</button> */}
    </div>
  )
}

export default TodoInput