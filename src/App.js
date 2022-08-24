import './App.css';
import './Assets/css/style.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About'
import { Route, Routes } from 'react-router-dom';
import Quality from './Components/Quality';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
      </Routes>
    </>
  );
}

export default App;
