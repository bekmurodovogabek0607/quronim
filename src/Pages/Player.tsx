import React, { useContext, Component, useRef, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Context } from '../GlobalProvayder';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link, useParams } from 'react-router-dom';
type Params = {
  id: string;
};
const Player = () => {


  
  const props = useContext(Context)
  function valuetext(value: number) {
    return `${value}°C`;
  }
  function PLayPause() {
    if (props?.Play) {
      props?.setPlay(false)
      props?.audioRef.current?.pause()
    }
    else {
      props?.setPlay(true)

      props?.audioRef.current?.play()
    }
  }
  function AfterMedia() {
    const nums: number = props?.Audio as number
    if (nums + 1 <= 6236) {
      
      props?.setAudio(nums + 1)
    }

  }
  function BeforeMedia() {
    const nums: number = props?.Audio as number
    if (nums - 1 > 0) {
      props?.setAudio(nums - 1)
    }
  }
  
  let After: number = props?.SuraNumber as number
  let Before: number = props?.SuraNumber as number
  function RepeatAll() {
    
  }
   
   
  return (
    <div style={props?.PlayerShow ? { display: "block" } : { display: "none" }} className='Audioplayer'>
      <audio
        src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${props?.Audio}.mp3`}
        ref={props?.audioRef}
        autoPlay={props?.Play}
      />
      <img src='https://media.istockphoto.com/id/1144991154/vector/blue-arabesque-flower-background.jpg?s=612x612&w=0&k=20&c=99HOrVABMn1IH7bubVHFmq1knMjzJwk3bghrFrnVYHw=' />
      <button onClick={() => { props?.setPlayerShow(false) }}><i className="fa-solid fa-xmark"></i></button>
      {/* <Box sx={{ width: '90%', margin: "0px auto" }}>
        <Slider
          aria-label="Temperature"
          value={props?.CurrentTime as number}
          max={props?.audioRef.current?.duration}
          min={0}
          sx={{ color: 'white', padding: '0px' }}
        />
      </Box> */}
      <div>
        <ul>
          <li onClick={() => { BeforeMedia() }}><i className="fa-solid fa-chevron-left"></i></li>
          <li style={{ fontSize: '15px' }}><i className="fa-solid fa-rotate-right"></i></li>
          <li onClick={() => { PLayPause() }}>{!props?.Play ? <i className="fa-solid fa-circle-play"></i> : <i className="fa-solid fa-pause"></i>}</li>
          <li style={{ fontSize: '15px' }} onClick={() => { RepeatAll() }}><i className="fa-solid fa-repeat"></i></li>
          <li onClick={() => { AfterMedia() }}><i className="fa-solid fa-chevron-right"></i></li>

        </ul>
      </div>
    </div>
  )
}

export default Player


