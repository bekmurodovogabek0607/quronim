import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GlobalProvayder, { Context } from './GlobalProvayder';
import SearchQibla from './Pages/SearchQibla';
import NamozTime from './Pages/NamozTime';
import Quronsura from './Pages/Quronsura';
import Ayats from './Pages/Ayats';
import Navbar from './Pages/Navbar';
import Player from './Pages/Player';
import ErkaklarNamoz from './Pages/ErkaklarNamoz';
import Bomdot from './Pages/Erkaklar/Bomdot';
function App() {

  const props = useContext(Context)
  console.log(props?.Audio);

  return (
    <>

      <GlobalProvayder>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/finder-qibla" component={SearchQibla} />
          <Route exact={true} path="/time" component={NamozTime} />
          <Route exact={true} path="/sura" component={Quronsura} />
          <Route exact={true} path="/sura/:id" component={Ayats} />
          <Route exact={true} path="/erkaklarnamozi" component={ErkaklarNamoz} />
          <Route exact={true} path="/erkaklarnamozi/bomdot" component={Bomdot} />

          
        </Switch>
        <Player />

      </GlobalProvayder>
    </>





  )
}

export default App
