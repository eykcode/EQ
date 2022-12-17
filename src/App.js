import {useState} from 'react'
import Dial from "./Dial"
import React from 'react';
import { start } from 'tone';

import ReactDOM from 'react-dom/client';


function App() {
  const [audioTune, setAudioTune]=useState(new Audio())
  const [playInLoop, setPlayInLoop] = useState(false);
  const [sliderNames, setSliderNames] = useState(["32", "64","125","250","500","1K","2K", "4K"])
  const [startValue, setStartValue] = useState(["-8","-8","-7","-6","-4","0","6","12"])
  const [filer, setFiler] = useState("");

  function previewFile(event){
    console.log(event.target.files[0])
    let reader = new FileReader();
    reader.onload=(event)=>{
      var link=event.target.result
      setAudioTune(new Audio(link))
    } 
    reader.readAsDataURL(event.target.files[0]);
  }
  function clickMe1(){ 
    setStartValue(["-8","-8","-7","-6","-4","0","6","12"]);
    
  }
  function clickMe2(){
    setStartValue(["0","0","0","0","0","0","0","0"]);
  
  }
  const playSound = () => {
    audioTune.play();
  }
  const pauseSound = () => {
    audioTune.pause();
  
  }


  return (
    
    <body>
      
      <div className='banner'>
        <h3>Equalizer</h3>
      </div>

      <div className='appContainer'>
        
      
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[0]} startValue={startValue} setStartValue={setStartValue} index={0}/>

          </div>
        
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[1]}startValue={startValue} setStartValue={setStartValue} index={1}/>
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[2]}startValue={startValue} setStartValue={setStartValue} index={2}/> 
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[3]}startValue={startValue} setStartValue={setStartValue} index={3}/>
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[4]}startValue={startValue} setStartValue={setStartValue} index={4}/>
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[5]}startValue={startValue} setStartValue={setStartValue} index={5}/>
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[6]}startValue={startValue} setStartValue={setStartValue} index={6}/>
          </div>
          <div className='dialContainer'>
            <Dial sliderName={sliderNames[7]}startValue={startValue} setStartValue={setStartValue} index={7}/>
          </div>
          
      </div>
      <div className='fileCall'>
      <input type="file" onChange={previewFile} /><br />
        
      </div>

      <div>
        <button onClick={clickMe1}>
          Deaf Mode
        </button>
        <button onClick={clickMe2}>
          Normal Mode
        </button>

      </div>
      <div>
        <button onClick={playSound}>
          Play
        </button>
        <button onClick={pauseSound}>
          Pause
        </button>
        
      </div>
      
      
    </body>
  );
}



export default App;
