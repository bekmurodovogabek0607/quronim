import React from 'react'

import { Link } from 'react-router-dom';
import '../index.css'
import { Router } from 'react-router-dom'
type DivProps={
   
} & React.ComponentProps<'div'>
const ConteinerAudio = ({children,...rest}:DivProps) => {
  return (
  <div  onClick={()=>{}} className='ContainerDiv ContainerAudio'>{children}<div><i className="fa-solid fa-circle-play"></i></div></div>
  )
}

export default ConteinerAudio