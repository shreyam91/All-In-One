
import './App.css'

const ProgressBar = ({progress}) => {
  return ( 
  <div className='outer'>

    <div className='inner' 
    style={{width: `${progress}%`, 
    color: progress < 5 ? 'black' : 'white'}}
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
