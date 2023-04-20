import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#1c2133';
      }else{
        setMode('light')
        document.body.style.backgroundColor = '#ecf0fd';
      }
  }
  return (
    <>
      <Navbar title="Textplays" about="About" toggleMode={toggleMode} mode ={mode}  />
       <div className="container my-3">
        <TextForm heading="Enter text here." mode={mode}/>
       </div>
       <Footer mode={mode}/>
       
    </>
  );
}

export default App;
