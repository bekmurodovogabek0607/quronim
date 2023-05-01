import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import Conteiner from './Compinent/Conteiner';
import SaravhaH1, { ILink } from './Compinent/SaravhaH1';

const DIvMenu = [
    { imgSrc: 'https://avatars.mds.yandex.net/i?id=59f716269b4c7ca0825c92f8c660d9be508c544b-8228018-images-thumbs&n=13', text: 'Namoz vaqtlari', link: '/time' },
    { imgSrc: 'https://www.alfarooqcentre.com/images/illustrations/prayer/Pray4.jpg', text: 'Erkaklar namoz', link: '/erkaklarnamozi' },
    { imgSrc: 'https://st3.depositphotos.com/1015180/13051/i/450/depositphotos_130513646-stock-photo-arab-muslim-woman-praying.jpg', text: 'Ayollar namoz', link: 'youtube.com' },
    
    { imgSrc: 'https://avatars.mds.yandex.net/i?id=9d0f21aec3de2d827f47a6f48d8e42c4-5858580-images-thumbs&n=13', text: 'Qiblani topish', link: '/finder-qibla' },
    { imgSrc: 'https://yt3.ggpht.com/a/AATXAJzXusu5iycTu9u5ykI3UwxuUUealqPyC2JY2Q=s900-c-k-c0xffffffff-no-rj-mo', text: 'Quron tilovat', link: 'sura' },
    { imgSrc: 'https://avatars.mds.yandex.net/i?id=2a0000017a17c236049abdccecb1d0a38bdf-4078045-images-thumbs&n=13', text: 'Tasbeh aylantrish', link: 'tasbeh' },
    { imgSrc: 'https://play-lh.googleusercontent.com/gYnOemZVI0kAAb-grhHTdhIpdJArmOpi7VLyJDoIHx31zcesBRe0j8adObMVWAWr_Ccw', text: 'Qazolar hisobi', link: 'qazo' },
    { imgSrc: 'https://avatars.mds.yandex.net/i?id=eefc27c826c18249e5abbd1a5e6bc82d67c40c50-5878855-images-thumbs&n=13', text: 'Sozlamalar', link: 'setting' },


]

const Home = () => {

    function HundelClick() {
        console.log('Hammasi yi');

    }
    const Line:ILink[]=[{text:'Home',link:'/'}]
    return (
        <div className='HomePage'>
            <SaravhaH1 text="Quronni o'rganing" line={Line}/>
           
            {
                DIvMenu.map(item => {
                    return (
                        <Conteiner  LINK={item.link}>
                            <img src={item.imgSrc}/>
                            <h2>{item.text}</h2>
                        </Conteiner>
                    )
                })
            }

        </div>
    )
}

export default Home