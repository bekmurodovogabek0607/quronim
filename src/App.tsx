import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GlobalProvayder from './GlobalProvayder';
function App() {
 

  let a: string | number = 'salom'


  return (
    <GlobalProvayder>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </GlobalProvayder>
  
   
  

  )
}

export default App
