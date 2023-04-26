import React from 'react'

import { Link } from 'react-router-dom';
import '../index.css'
import { Router } from 'react-router-dom'
type DivProps={
   LINK:string
} & React.ComponentProps<'div'>
const Conteiner = ({children,...rest}:DivProps) => {
  return (
   <Link to={rest.LINK}><div  onClick={()=>{}} className='ContainerDiv'>{children}</div></Link> 
  )
}

export default Conteiner