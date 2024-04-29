import { ReactNode, createContext, useState } from "react";

export const todoContext = createContext<TodoContextProvider | null>(null);

type TodoProviderProps = {
    children:ReactNode
} 
 
type TodoContextProvider = {
    todo:Todo[];
    handleTodo: (task:string) =>void;
}

type Todo = {
    id:string;
    task:string;
    completed:boolean,
    createdAt: Date
}

export const TodoContextProvider = ({children}:TodoProviderProps)=>{
const [todo,setTodo] = useState<Todo[]>([])

const handleTodo = (task:string):void=>{
setTodo((prev)=> 
   {
    const newTodo = [{
id:Math.random().toString(),
task:task,
completed:false,
createdAt: new Date()
    },
    ...prev]

return newTodo
})
}
return <todoContext.Provider value={{todo, handleTodo}}>
    {children}
    </todoContext.Provider>
}