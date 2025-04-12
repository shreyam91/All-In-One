import './App.css';
import Canvas from './components/Canvas';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <h2>Search Image..</h2>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </>
  );
}

export default App;
