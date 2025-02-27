import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [result, setResult] = useState("")
  const [input, setInput] = useState([])
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async() =>{
    if(cache[input]){
      setResult(cache[input]);
      return;
    }
    
    const data = await fetch ('https://dummyjson.com/recipes/search?q=' + input);
    const json = await data.json();
    setResult(json?.recipes)
    setCache(prev => ({...prev,[input]:json?.recipes}));
  }

  useEffect(() =>{
    const timer = setTimeout(fetchData, 300);

    return () =>{
      clearTimeout(timer);
    }
  },[input])

  return (
   <>
    <h2>Auto Complete Search Bar</h2>
    <div>
      <input 
      type="text" 
      className='search-input' 
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      onFocus={() => setShowResult(true)}
      onBlur={() => setShowResult(false)}
      />
    </div>

    {showResult && (
      <div className='result-container'>
      {result.map((r) => <span key={r.id} className='result'>{r.name}</span>)}
    </div>
    )}
   </>
  )
}

export default App
