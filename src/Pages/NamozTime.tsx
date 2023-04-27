import React from 'react'
import BoxDiv from '../Compinent/BoxDiv'


const NamozTime = () => {
  return (
    <>
    <h1>Namoz vaqti</h1>
    <BoxDiv active={false} Day='Dushanba' region='Toshkent' RealDate='Keyingi namozgacha 1oldi' name='Bomdot' time='12:34'/>
    <BoxDiv active={false} nameLeft='Bomdot' time='04:15'/>
    </>
  )
}

export default NamozTime