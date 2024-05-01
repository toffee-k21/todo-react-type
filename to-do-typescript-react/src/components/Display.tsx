import React, { useContext, useState } from 'react'
import { Todo, todoContext } from '../utils/Context'

const Display = () => {
  const Todos = useContext(todoContext)
  const todoList = Todos?.todo;
  const handleToggle = Todos?.handleToggleItems
  // const handleTodos = Todos?.handleTodo;

  // const [bool,setBool] = useState(false)
  console.log(todoList)

  return (
    <div>
      {
        todoList?.map((r: Todo) => {
          return <li className='list-none'>
            <input type="checkbox"
              checked={r.completed}
              onChange={() => handleToggle(r?.id)} 
              />
            <label>{r?.task}</label>
            {r.completed ? <button className='bg-red-500 p-1 ml-10'>Delete</button>: console.log("done")}
          </li>
        }

        )
      }

    </div>
  )
}

export default Display