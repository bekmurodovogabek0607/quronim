
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Conteiner from '../Compinent/Conteiner';
import ConteinerAudio from '../Compinent/ContainerAudio';
import ReactAudioPlayer from 'react-audio-player';
import { Context } from '../GlobalProvayder';
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
    const props = useContext(Context)
    const { data } = useQuery(['ayat'], () => { return axios.get(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy `).then(resp => resp.data) })
    const Data: ISurahOne = data?.data
    const [PlayAyts, setPlayAyst] = useState<boolean>(false)
    console.log(props?.audioRef.current?.onplaying);
    function Play(num: number) {
        props?.setPlayerShow(true);
        setPlayAyst(true)
        props?.setPlay(true)
        props?.setAudio(num);
        props?.audioRef.current?.play()
    }
    function Pause() {
        props?.setPlay(false)
        setPlayAyst(false)
        props?.audioRef.current?.pause()
    }


    return (
        <>
            <h2>{Data?.englishName}-{Data?.name}</h2>
            {
                Data?.ayahs?.map((item: IAyat) => {
                    return (
                        <ConteinerAudio >
                            <h2>{Data?.englishName}</h2>
                            <h1 style={{ fontSize: "20px" }}>{item?.number}</h1>
                            <div style={props?.Audio == item?.number ? { display: 'flex' } : {}}>
                                <button onClick={() => { !PlayAyts ? Play(item?.number) : Pause() }}>{props?.Audio == item?.number ? !props?.Play ? <i className="fa-solid fa-circle-play"></i> : <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-circle-play"></i>}</button>
                            </div>
                        </ConteinerAudio>
                    )
                })

            }



        </>
    )
}

export default Ayats