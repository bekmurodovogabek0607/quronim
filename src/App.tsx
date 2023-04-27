import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GlobalProvayder from './GlobalProvayder';
import SearchQibla from './Pages/SearchQibla';
import NamozTime from './Pages/NamozTime';
import Quronsura from './Pages/Quronsura';
function App() {


  let a: string | number = 'salom'


  return (
    <GlobalProvayder>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/finder-qibla" component={SearchQibla} />
        <Route exact={true} path="/time" component={NamozTime} />
        <Route exact={true} path="/sura" component={Quronsura} />



      </Switch>
    </GlobalProvayder>




  )
}

export default App
