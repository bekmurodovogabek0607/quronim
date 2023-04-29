import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import Conteiner from '../Compinent/Conteiner'
import { Context } from '../GlobalProvayder'
interface ISura {
    englishName: string
    englishNameTranslation: string
    name: string
    number: number
    numberOfAyahs: number
    revelationType: string
}
interface IDate {
    code: number
    status: string
    data: ISura[]
}
const Quronsura = () => {
    const props=useContext(Context)
    const { data } = useQuery(['sura'], () => { return axios.get('https://api.alquran.cloud/v1/surah').then(resp => resp.data) })
    const Data: ISura[] = data?.data?.map((item: unknown) => { return item })
    return (
        <>
          
            {
                Data?.map((item: ISura) => {
                    return (
                        <Conteiner  onClick={()=>{props?.setSuraNumber(item?.number)}}  LINK={`${item?.number}`}>
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