import React, { useContext ,Component, useRef} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Context } from '../GlobalProvayder';
const Player = () => {
  const props = useContext(Context)
 
  function PLayPause() {
    if(props?.Play) {
      props?.setPlay(false)
      props?.audioRef.current?.play()
    }  
    else{
      props?.setPlay(true)
      props?.audioRef.current?.pause()
    } 
  }

  return (
    <div style={props?.PlayerShow ? { display: "block" } : { display: "none" }} className='Audioplayer'>
      <audio
        src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${props?.Audio}.mp3`}
        ref={props?.audioRef}
         />
      <img src='https://media.istockphoto.com/id/1144991154/vector/blue-arabesque-flower-background.jpg?s=612x612&w=0&k=20&c=99HOrVABMn1IH7bubVHFmq1knMjzJwk3bghrFrnVYHw=' />
      <button onClick={() => { props?.setPlayerShow(false) }}><i className="fa-solid fa-xmark"></i></button>
      
      <div>
        <ul>
          <li><i className="fa-solid fa-chevron-left"></i></li>
          <li onClick={() => { PLayPause() }}>{props?.Play ? <i className="fa-solid fa-circle-play"></i> : <i className="fa-solid fa-pause"></i>}</li>
          <li><i className="fa-solid fa-chevron-right"></i></li>

        </ul>
      </div>
    </div>
  )
}

export default Player


