import React, { useContext, useState } from 'react'
import { todoContext } from '../utils/Context'

const Display = () => {
    const Todos = useContext(todoContext)
    const todoList = Todos?.todo;
    // const handleTodos = Todos?.handleTodo;
    
    const [bool,setBool] = useState(false)

    const handleToggle = (id:string ) =>{
        // handleTodos
    }

  return (
    <div>
        {
  todoList?.map((r)=><div className='flex'>
    <input type="checkbox" onClick={()=>handleToggle(r.id)}/>
    <div>{r.task}</div>
    </div>)
}
        
    </div>
  )
}

export default Display