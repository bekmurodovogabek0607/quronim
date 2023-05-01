import React from 'react'
import { Link } from 'react-router-dom'
export interface ILink {
    link: string,
    text: string
}
type Sarlavha = {
    text: string,
    line: ILink[]
}
const SaravhaH1 = ({ ...rest }: Sarlavha) => {
    return (
        <div className='Sarlavha'>
            <ul>
                {
                    rest.line.map((item: ILink) => {
                        return (
                            <Link style={{textDecoration:"none"}} to={item.link}> <li>{item.text}  <i className="fa-solid fa-chevron-right"></i></li></Link>
                        )
                    })

                }
              

            </ul>
            <h2>{rest.text}</h2>
        </div>
    )
}

export default SaravhaH1