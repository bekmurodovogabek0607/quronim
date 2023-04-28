
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
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
    const { data } = useQuery(['ayat'], () => { return axios.get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy `).then(resp => resp.data) })
    const Data: ISurahOne = data?.data

    console.log(Data?.ayahs);
    function PlayPause() {

        if (props?.Play) {
            props?.setPlay(false)
            props?.audioRef.current?.play()
        }
        else {
            props?.setPlay(true)
            props?.audioRef.current?.pause()
        }

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
                                <button onClick={() => { props?.setAudio(item?.number); props?.setPlayerShow(true); PlayPause() }}>{props?.Audio == item?.number ? props?.Play ? <i className="fa-solid fa-circle-play"></i> : <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-circle-play"></i>}</button>
                            </div>
                        </ConteinerAudio>
                    )
                })

            }



        </>
    )
}

export default Ayats