import { useContext, useState } from "react"
import { todoContext } from "../utils/Context"


const Input = () => {

  const [text,setText] = useState("");
  const handleTodo = useContext(todoContext)
  const todoList = handleTodo?.todo;
  const handleAdd = ( text:string)=>{
handleTodo?.handleTodo(text);
   }
  return (
    <div>
        <input 
        onChange={(e)=>setText(e.target.value)}
        className="border-black border-[2px] p-1 m-1 w-1/3"/>
        <button onClick={()=>handleAdd(text)} className="bg-black text-white p-1 border-black border-[2px]">Add</button>
{
  todoList?.map((r)=><div>{r.task}</div>)
}
    </div>
  )
}

export default Input