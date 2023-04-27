import React from 'react'
type BoxDivType={
    active:boolean,
    nameLeft?:string,
    name?:string
    time?:string,
    region?:string,
    RealDate?:string,
    Day?:string
} & React.ComponentProps<'div'>
const BoxDiv = ({...rest}:BoxDivType) => {
  return (
    <div className={rest.active? 'TimeDiv ActiveDiv':'TimeDiv'}>
        <div>
            <h2>{rest.Day}</h2>
            <h2 style={{fontSize:"40px"}}>{rest.nameLeft}</h2>
            <h3>{rest.region}</h3>
            <h2>{rest.RealDate}</h2>
        </div>
        <div>
            <h2>{rest.name}</h2>
            <h1 style={rest.active?{color:'white'}:{color:"black"}}>{rest.time}</h1>
        </div>

    </div>
  )
}

export default BoxDiv