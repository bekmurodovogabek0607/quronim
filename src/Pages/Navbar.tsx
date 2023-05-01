import React from 'react'
import ButtonClick from '../Compinent/ButtonClick'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul>
            <li><h1 style={{fontSize:"30px"}}>Quron</h1></li>
           {/* <Link to={'/'}><li>Home</li></Link> 
            <li>Sevimli</li> */}


        </ul>
        {/* <ul>
            
            
            <li><ButtonClick Style='secondry'>Sing In</ButtonClick></li>
            <li><ButtonClick Style='prymary'>Sing Up</ButtonClick></li>


        </ul> */}
    </div>
  )
}

export default Navbar