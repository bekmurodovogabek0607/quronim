import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import Conteiner from '../Compinent/Conteiner'
const Quronsura = () => {
    const Surah=useQuery(['sura'],()=>{return axios.get('https://api.alquran.cloud/v1/surah').then(resp=>resp.data)})
    console.log(Surah.data);
    
  return (
    <>
    <h1>Quron</h1>
    {
        Surah.data?.data?.map((item:any)=>{
            return(
                <Conteiner LINK={`${ item?.number }`}>
                    <h2>{item?.number} {item?.name}</h2>
                    <h3>{item?.englishName}</h3>
                    <h3>Ayahs number-{item?.numberOfAyahs}</h3>
                </Conteiner>
            )
        })
    }
    </>
  )
}

export default Quronsura