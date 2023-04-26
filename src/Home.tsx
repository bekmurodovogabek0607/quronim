import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import Conteiner from './Compinent/Conteiner';

const DIvMenu = [
    { imgSrc: 'nimadir', text: 'salom', link: 'youtube.com' }
]

const Home = () => {

    function HundelClick() {
        console.log('Hammasi yaxshi');

    }

    return (
        <div>
            <h1>Learning quran</h1>
            {
                DIvMenu.map(item => {
                    return (
                        <Conteiner  LINK={item.link}>
                            <img src={item.imgSrc}/>
                            <h1>{item.text}</h1>
                        </Conteiner>
                    )
                })
            }

        </div>
    )
}

export default Home