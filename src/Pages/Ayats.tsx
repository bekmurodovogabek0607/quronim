
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Conteiner from '../Compinent/Conteiner';
import ConteinerAudio from '../Compinent/ContainerAudio';
type Params = {
    id: string;
};
interface IAyat {
    audio: string
    audioSecondary: string[]
    hizbQuarter: number
    juz: number
    manzil: number
    number: number
    numberInSurah: number
    page: number
    ruku: number
    sajda: boolean
    text: string
}
interface ISurahOne {
    ayahs: IAyat[]
    englishName: string
    englishNameTranslation: string
    name: string
    number: number
    numberOfAyahs: number
    revelationType: string
}
const Ayats = () => {
    const { id } = useParams<Params>();

    const { data } = useQuery(['ayat'], () => { return axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy `).then(resp => resp.data) })
    const Data: ISurahOne = data?.data
    console.log(Data?.ayahs);


    return (
        <>
            <h2>{Data?.englishName}-{Data?.name}</h2>
            {
                Data?.ayahs?.map((item: IAyat) => {
                    return (
                        <ConteinerAudio>
                            <h2>{Data?.englishName}</h2>
                            <h1 style={{ fontSize: "20px" }}>{item?.number}</h1>
                        </ConteinerAudio>
                    )
                })
            }

        </>
    )
}

export default Ayats