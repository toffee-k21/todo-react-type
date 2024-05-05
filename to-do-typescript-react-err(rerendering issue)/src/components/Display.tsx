import React, { useContext, useEffect, useState } from 'react'
import { Todo, todoContext } from '../utils/Context'

const Display = () => {
  const [list,setList] = useState<Todo[]>([])
  const Todos = useContext(todoContext)
  const {todo,handleToggleItems,handleDeleteItem} = Todos!
  // const todoList = Todos?.todo;
  // const handleToggle = Todos?.handleToggleItems
  // const handleDeleteItem = Todos?.handleDeleteItem
  // console.log(handleToggle())
  // const handleTodos = Todos?.handleTodo;

  // const [bool,setBool] = useState(false)
  // console.log(todoList)
  useEffect(()=>{
    setList(todo);
  },[])
const handleAll = ( )=>{
// setList(todoList?.filter((r)=>r.completed == true))
setList(todo)
}
const handleActive =()=> {
  setList(todo?.filter((r)=>r.completed == false))
}
const handlecompleted = ( )=>{
  setList(todo?.filter((r)=>r.completed == true))
}
  return (
    <div>
      <button onClick={handleAll}>all</button>
      <button onClick={handleActive}>active</button>
      <button onClick={handlecompleted}>completed</button>
      {
        list?.map((r: Todo) => {
          return <li className='list-none'>
            <input type="checkbox"
              checked={r.completed}
              onChange={() => handleToggleItems(r?.id)} 
              />
            {r.completed? <del>{r.task}</del>:<label>{r?.task}</label>}
            {r.completed ? <button onClick={() => handleDeleteItem(r?.id)} className='bg-red-500 p-1 ml-10'>Delete</button>: <button></button>}
          </li>
        }

        )
      }

    </div>
  )
}

export default Display