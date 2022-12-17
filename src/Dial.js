import React, { useEffect } from 'react';
import { useState } from "react";




function Dial({sliderName, startValue, setStartValue, index}) {
  useEffect(() => 
  {
    setSound(parseInt(startValue[index]))
  },[startValue])
  function handleChange(e)
  {
    let copyArray=startValue;
    console.log(e)
    console.log(copyArray)
    copyArray[index]=e.toString()
    
    setStartValue(copyArray)
    
  }
  const [sound, setSound] = useState(startValue) 
  return (
    <main>
    
      <input
        max={12}
        min={-12}
        type="range"
        value={sound}
        onChange={(e) => handleChange(e.target.value)}
      />
    <p>{sound}</p>
    <p>{sliderName}</p>


  </main>
  )
}
function previewFile() {
  const preview = document.querySelector('audio');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}


export default Dial
