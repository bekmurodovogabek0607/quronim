import React, { createContext, useState } from 'react'

type ContextType={
    UserINformation:string |null,
    seUserINformation:React.Dispatch<React.SetStateAction<string | null>>
}


export const Context = createContext<ContextType|null>(null)
type ChildrenType = {
    children: React.ReactNode
}
const GlobalProvayder = ({ children }: ChildrenType) => {
    const [UserINformation,seUserINformation]=useState<string |null>("Assalomu aleykum")
    
    return (
        <Context.Provider value={{UserINformation,seUserINformation}}>{children}</Context.Provider>
    )
}

export default GlobalProvayder