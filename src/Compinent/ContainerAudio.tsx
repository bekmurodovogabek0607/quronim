import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import '../index.css'
import { Router } from 'react-router-dom'
import { Context } from '../GlobalProvayder';
type DivProps = {
    
} & React.ComponentProps<'div'>
const ConteinerAudio = ({ children, ...rest }: DivProps) => {
    const props = useContext(Context)
    
    
    return (
        <div onClick={() => { }} className='ContainerDiv ContainerAudio'>
            {children}
           
        </div>
    )
}

export default ConteinerAudio