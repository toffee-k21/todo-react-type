import  { useContext} from 'react'
import { Todo, todoContext } from '../utils/Context'

const Display = () => {
  const Todos = useContext(todoContext)
  const {todo,handleToggleItems,handleDeleteItem} = Todos!


  return (
    <div>
            {
        todo?.map((r: Todo) => {
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