import { useContext } from "react"
import { todoContext } from "../utils/Context"


const Input = () => {

  const handleTodo = useContext(todoContext)
  console.log(handleTodo)
   const handleAdd = ( )=>{

   }
  return (
    <div>
        <input className="border-black border-[2px] p-1 m-1 w-1/3"/>
        <button onClick={handleAdd} className="bg-black text-white p-1 border-black border-[2px]">Add</button>
    </div>
  )
}

export default Input