import { ReactNode, createContext, useState } from "react";

export const todoContext = createContext<TodoContextProvider | null>(null);

type TodoProviderProps = {
    children: ReactNode
}

type TodoContextProvider = {
    todo: Todo[];
    handleTodo: (task: string) => void;
    handleToggleItems: (id: string) => void;
    handleDeleteItem: (id:string) => void;
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean,
    createdAt: Date
}

export const TodoContextProvider = ({ children }: TodoProviderProps) => {
    const [todo, setTodo] = useState<Todo[]>([])

    const handleTodo = (task: string): void => {
        setTodo((prev) => {
            const newTodo = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            },
            ...prev]

            return newTodo
        })
    }

    const handleToggleItems = (id: string) => {
        setTodo((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, completed: !todo.completed }
                }
                else return todo
            })
            return newTodos
        })
    }

    const handleDeleteItem = (id:string) =>{
setTodo((prev)=> { 
    const newTodos = prev.filter((r)=>{
       return r.id != id
    })
    return newTodos


})
    }



    return <todoContext.Provider value={{ todo, handleTodo, handleToggleItems, handleDeleteItem}}>
        {children}
    </todoContext.Provider>
}