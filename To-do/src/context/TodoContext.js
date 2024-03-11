import { useContext,createContext } from "react";

export const todoContext= createContext(
    {
        todos:[{
            id:1,
            todo:"msg",
            completed:false
        }

        
    ],
    addTodo:(todo)=>{},
    updatedTodo: (id,todo)=>{},
    deletedTodo: (id)=>{},
    toggleCompleted: (id)=>{}

    })

export const todoUse =()=>(
    useContext(todoContext)
)

export const TodoProvider = todoContext.Provider

