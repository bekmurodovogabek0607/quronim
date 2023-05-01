import React, { useEffect, useRef, useState } from 'react'
import BoxDiv from '../Compinent/BoxDiv'
import { QueryCache, useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { Select, Space } from 'antd';
import axios from 'axios'
interface IKeyingi {
    time: string
    name: string

}
const NamozTime = () => {
    const [Region, setRegion] = useState<string>('toshkent')
    const TimeGet = useQuery(["NamozTime"], () => { return axios.get(`https://islomapi.uz/api/present/day?region=${Region}`).then(resp => resp.data) })
    const queryClient = useQueryClient()
   function CheckTime(params1: string, params2: string, params3: string, name: string): boolean {
        if (params1 == undefined) return false
        let ss: string[] = params1?.split(':')
        let ss2: string[] = params2?.split(':')
        let ss3: string[] = params3?.split(':')


        let NamozTime1: number = Number(ss[0]) * 60 + Number(ss[1])
        let NamozTime2: number = Number(ss2[0]) * 60 + Number(ss2[1])
        let NamozTime3: number = Number(ss3[0]) * 60 + Number(ss3[1])

        let RealTime: number = Number(new Date().getHours()) * 60 + Number(new Date().getMinutes())

        if (RealTime >= NamozTime1 && RealTime <= NamozTime2 && RealTime > NamozTime3) return true

        return false
    }
    const TongSaharlik: boolean = CheckTime(TimeGet.data?.times?.hufton, TimeGet.data?.times?.quyosh, TimeGet.data?.times?.tong_saharlik, 'Tong Saharlik')
    const Bomdot: boolean = CheckTime(TimeGet.data?.times?.tong_saharlik, TimeGet.data?.times?.peshin, TimeGet.data?.times?.quyosh, 'Bomdot')
    const Peshin: boolean = CheckTime(TimeGet.data?.times?.quyosh, TimeGet.data?.times?.asr, TimeGet.data?.times?.peshin, 'Peshin')
    const Ars: boolean = CheckTime(TimeGet.data?.times?.peshin, TimeGet.data?.times?.shom_iftor, TimeGet.data?.times?.asr, 'Asr')
    const Shom: boolean = CheckTime(TimeGet.data?.times?.asr, TimeGet.data?.times?.hufton, TimeGet.data?.times?.shom_iftor, 'Shom')
    const Huftom: boolean = CheckTime(TimeGet.data?.times?.shom_iftor, TimeGet.data?.times?.tong_saharlik, TimeGet.data?.times?.hufton, 'Hufton')
    const arr: IKeyingi[] = [
        { time: TimeGet.data?.times?.tong_saharlik, name: 'Tong Saharlik' },
        { time: TimeGet.data?.times?.quyosh, name: 'Bomdot' },
        { time: TimeGet.data?.times?.peshin, name: 'Peshin' },
        { time: TimeGet.data?.times?.asr, name: 'Asr' },
        { time: TimeGet.data?.times?.shom_iftor, name: 'Shom' },
        { time: TimeGet.data?.times?.hufton, name: 'Hufton' }

    ]
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setRegion(value)
        TimeGet.refetch()
    };
    useEffect(() => {
        TimeGet.refetch()
    }, [Region])

    return (
        <>
            <h1>Namoz vaqti</h1>
            <div className={'TimeDiv'}>
                <div>
                    <h2>{TimeGet.data?.weekday}</h2>

                    <h3>{TimeGet.data?.date}</h3>

                </div>
                <div>
                    <Space wrap style={{ border: "none" }}>
                        <Select
                            defaultValue="toshkent"
                            style={{ width: 120, }}
                            onChange={handleChange}
                            loading={TimeGet.isRefetching}
                            options={[
                                { value: 'toshkent', label: 'Toshkent', },
                                { value: 'buxoro', label: 'Buxoro' },
                                { value: 'samarqand', label: 'Samarqand' },
                                { value: 'navoiy', label: 'Navoiy' },
                                { value: 'xorazm', label: 'xorazm' },
                                { value: 'andijon', label: 'Andijon' },
                                { value: "farg'ona", label: 'Farg\'ona' },
                                { value: 'namangan', label: 'Namangan' },
                            ]}
                        />
                    </Space>

                </div>

            </div>

            <BoxDiv active={TongSaharlik} nameLeft='Tong Saharlik' time={TimeGet.data?.times?.tong_saharlik} />
            <BoxDiv active={Bomdot} nameLeft='Bomdot' time={TimeGet.data?.times?.quyosh} />

            <BoxDiv active={Peshin} nameLeft='Peshin' time={TimeGet.data?.times?.peshin} />
            <BoxDiv active={Ars} nameLeft='Asr' time={TimeGet.data?.times?.asr} />
            <BoxDiv active={Shom} nameLeft='Shom' time={TimeGet.data?.times?.shom_iftor} />
            <BoxDiv active={Huftom} nameLeft='Hufton' time={TimeGet.data?.times?.hufton} />

        </>
    )
}

export default NamozTime