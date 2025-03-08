
import { useEffect, useState } from 'react';
import './App.css'

const ProgressBar = ({progress}) => {

  const[animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(()=>{
    setTimeout(()=> setAnimatedProgress(progress),100)
  },[progress]);

  return ( 
  <div className='outer'>

    <div className='inner' 
      style={{
        // width: `${animatedProgress}%`,  //not efficient 
        transform: `translateX(${animatedProgress - 100}%)`, //efficient way
        color: animatedProgress < 5 ? 'black' : 'white'}}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemax='100'
      aria-valuemin='0'
    >
    {progress}% 
    </div>
  </div>
  );
}

function App() {

  const bars = [0,5,10,30,50,70,90,100];

  return (
    <div>
      <h1 className='name'> Progress Bar</h1>

      {bars.map((value)=> (
        <ProgressBar key={value} progress={value} className='bar'/>
        ))}
    </div>
  )
}

export default App
