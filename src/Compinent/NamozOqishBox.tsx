import React from 'react'
import { Link } from 'react-router-dom'
type NamozBox = {
    LINK: string
    name: string
} & React.ComponentProps<'div'>
const NamozOqishBox = ({ ...rest }: NamozBox) => {
    return (
        <Link style={{textDecoration:"none"}} to={rest.LINK}>
            <div className={'TimeDiv Hover'}>
                <div>
                    <h2>{rest.name}</h2>

                </div>
                <div>
                    <h3><i className="fa-solid fa-chevron-right"></i></h3>

                </div>

            </div>
        </Link>

    )
}

export default NamozOqishBox