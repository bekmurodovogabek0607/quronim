import React, { createContext, useState ,useRef} from 'react'

type ContextType={
    Audio:number|null,
    setAudio:React.Dispatch<React.SetStateAction<number|null>>,
    SuraNumber:number|null,
    setSuraNumber:React.Dispatch<React.SetStateAction<number|null>>,
    PlayerShow:boolean,
    setPlayerShow:React.Dispatch<React.SetStateAction<boolean>>,
    Play:boolean,
    setPlay:React.Dispatch<React.SetStateAction<boolean>>,
    audioRef:React.RefObject<HTMLAudioElement>
    AutoPlay:boolean,
    setAutoPlay:React.Dispatch<React.SetStateAction<boolean>>,
     
}


export const Context = createContext<ContextType|null>(null)
type ChildrenType = {
    children: React.ReactNode
}
const GlobalProvayder = ({ children }: ChildrenType) => {
    const [Audio,setAudio]=useState<number |null>(null)
    const [SuraNumber,setSuraNumber]=useState<number|null>(null)

    const [PlayerShow,setPlayerShow]=useState<boolean>(false)
    const [Play,setPlay]=useState<boolean>(false)
    const audioRef=useRef<HTMLAudioElement>(null)
    const [AutoPlay,setAutoPlay]=useState<boolean>(false)
    
    
    return (
        <Context.Provider value={{Audio,setAudio,PlayerShow,setPlayerShow,Play,setPlay,audioRef,AutoPlay,setAutoPlay,SuraNumber,setSuraNumber}}>{children}</Context.Provider>
    )
}

export default GlobalProvayder