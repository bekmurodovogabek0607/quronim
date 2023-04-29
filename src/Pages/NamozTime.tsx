import React, { useState } from 'react'
import BoxDiv from '../Compinent/BoxDiv'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'


const NamozTime = () => {
    const TimeGet = useQuery(["NamozTime"], () => { return axios.get('https://islomapi.uz/api/present/day?region=Toshkent').then(resp => resp.data) })
    console.log(TimeGet);
    const [NextNamoz, setNextNamoz] = useState<{ name: string, time: string }>({name:'',time:''})
    function CheckTime(params1: string, params2: string, params3: string, name: string): boolean {
        if (params1 == undefined) return false
        let ss: string[] = params1?.split(':')
        let ss2: string[] = params2?.split(':')
        let ss3: string[] = params3?.split(':')

        console.log(new Date().getHours());
        console.log(new Date().getMinutes());
        let NamozTime1: number = Number(ss[0]) * 60 + Number(ss[1])
        let NamozTime2: number = Number(ss2[0]) * 60 + Number(ss2[1])
        let NamozTime3: number = Number(ss3[0]) * 60 + Number(ss3[1])

        let RealTime: number = Number(new Date().getHours()) * 60 + Number(new Date().getMinutes())
        console.log(`${NamozTime1},${RealTime},${NamozTime2}`);
          if (RealTime >= NamozTime1 && RealTime <= NamozTime2 && RealTime < NamozTime3) return true

        return false
    }

    return (
        <>
            <h1>Namoz vaqti</h1>
            <BoxDiv active={false} Day={`${TimeGet.data?.weekday}, ${TimeGet.data?.date}`} region={TimeGet.data?.region}  name={NextNamoz?.name} time={NextNamoz?.time} />
            <BoxDiv active={CheckTime(TimeGet.data?.times?.hufton, TimeGet.data?.times?.quyosh, TimeGet.data?.times?.tong_saharlik, 'Tong Saharlik')} nameLeft='Tong Saharlik' time={TimeGet.data?.times?.tong_saharlik} />
            <BoxDiv active={CheckTime(TimeGet.data?.times?.tong_saharlik, TimeGet.data?.times?.peshin, TimeGet.data?.times?.quyosh, 'Bomdot')} nameLeft='Bomdot' time={TimeGet.data?.times?.quyosh} />

            <BoxDiv active={CheckTime(TimeGet.data?.times?.quyosh, TimeGet.data?.times?.asr, TimeGet.data?.times?.peshin, 'Peshin')} nameLeft='Peshin' time={TimeGet.data?.times?.peshin} />
            <BoxDiv active={CheckTime(TimeGet.data?.times?.peshin, TimeGet.data?.times?.shom_iftor, TimeGet.data?.times?.asr, 'Asr')} nameLeft='Asr' time={TimeGet.data?.times?.asr} />
            <BoxDiv active={CheckTime(TimeGet.data?.times?.asr, TimeGet.data?.times?.hufton, TimeGet.data?.times?.shom_iftor, 'Shom')} nameLeft='Shom' time={TimeGet.data?.times?.shom_iftor} />
            <BoxDiv active={CheckTime(TimeGet.data?.times?.shom_iftor, TimeGet.data?.times?.tong_saharlik, TimeGet.data?.times?.hufton, 'Hufton')} nameLeft='Hufton' time={TimeGet.data?.times?.hufton} />

        </>
    )
}

export default NamozTime