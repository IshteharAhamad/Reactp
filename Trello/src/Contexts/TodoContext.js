import { useContext } from "react";
import { createContext } from "react";

export const TodoContext=createContext({});
export function useToto(){
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider;