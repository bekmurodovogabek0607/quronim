import React from 'react'
import SaravhaH1, { ILink } from '../../Compinent/SaravhaH1'
import { Carousel } from 'antd';
import { ChangeNamoz, Harakatlar, NamozHarakat } from '../NamozHarakat';
import Item from 'antd/es/list/Item';

const contentStyle: React.CSSProperties = {

    

    
    
};



const Bomdot = () => {

    const Line: ILink[] = [{ text: 'Home', link: '/' }, { text: 'Erkaklar namozi', link: '/erkaklarnamozi' }, { text: 'Bomdot', link: '/erkaklarnamozi/bomdot' }]
    const BomdotHarakat: string[] = ['Niyat', 'Takbir', 'Qiyom', 'Ruku', 'Qavma', 'Sajda', 'Jasla', 'Sajda', "2-rakat Qaiyom", 'Ruku', 'Qavma', 'Sajda', 'Jasla', 'Sajda', "Qa'da", 'Salom', 'Yakun']
    console.log(ChangeNamoz("Bomdot", BomdotHarakat));


    return (
        <>
            <SaravhaH1 text='Erkaklar uchun Bomdot namozi' line={Line} />
            <Carousel  className={'TimeDiv'} waitForAnimate={true} >
                {
                    ChangeNamoz("Bomdot", BomdotHarakat).map(item => {
                        return (
                            <div >
                                <div className='NamozHarakatlar' style={{ display: 'grid' }}>
                                    <div>
                                        <h2 >{item.harakat}</h2>
                                        {item.textBefore?.map(text => {
                                            return (
                                                <p>{text}</p>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <img src={item.imgSrc} alt={item.imgSrc} />
                                    </div>
                                    <div>
                                        {item.textAfter?.map(text => {
                                            return (
                                                <p>{text}</p>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>

                        )
                    })

                }



            </Carousel>
        </>
    )
}

export default Bomdot