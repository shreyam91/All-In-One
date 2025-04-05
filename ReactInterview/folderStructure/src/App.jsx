import './index.css'
import json from './data.json'
import { useState } from 'react';



function App() {
  const [data, setData] = useState(json);

  return (
   <div>
   <h2 className='name'>File/Folder Structure...</h2>
   <div className='container'>
    {
      data.map((node) =>( 

        <div>{node.name} </div>

    ))}
   </div>
          

   </div>
  )
}

export default App
