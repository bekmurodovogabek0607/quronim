import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import NamozOqishBox from '../Compinent/NamozOqishBox';
import SaravhaH1, { ILink } from '../Compinent/SaravhaH1';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const ErkaklarNamoz = () => {

    const Namoz = [
        { name: "bomdot", link: '/erkaklarnamozi/bomdot' },
        { name: "Peshin", link: '/erkaklarnamozi/peshin' },
        { name: "Asr", link: '/erkaklarnamozi/asr' },
        { name: "Shom", link: '/erkaklarnamozi/shom' },
        { name: "Hufton", link: '/erkaklarnamozi/hufton' },

    ]
    const Line:ILink[]=[{text:'Home',link:'/'},{text:'Erkaklar namozi',link:'/erkaklarnamozi'}]

    return (
        <>
        <SaravhaH1 text="Erkaklar uchun Namoz o'qish tartibi" line={Line}/>
       
            {
                Namoz.map((item: { name: string, link: string }) => {
                    return (
                        <NamozOqishBox name={item.name} LINK={item.link} />
                    )
                })
            }

        </>
    )
}

export default ErkaklarNamoz