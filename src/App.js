import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Features from './components/Features';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


 function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1000);
  }

  const toggleMode =()=>{
      if(mode === 'light'){
        setMode('dark');
        showAlert("Dark mode enable", "success");
        document.body.style.backgroundColor = '#1c2133';
        document.title = 'Textplays-dark Mode';
      }else{
        setMode('light');
        showAlert("light mode enable", "success");
        document.body.style.backgroundColor = '#ecf0fd';
        document.title = 'Textplays-light Mode';
      }
  }
  return (
    <>
    <Router>
      <Navbar title="Textplays" about="About" toggleMode={toggleMode} mode ={mode}  />
       <Alert alert ={alert}/>
       
       < Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading={"Enter text here."} mode={mode} />}/>
          
          <Route path="/about" element={<About  mode={mode}/>}/>     

          <Route path="/features" element={<Features mode={mode}/>}/>

        </ Routes>
    </Router>   
      <Footer mode={mode}/>
    </>
  );
}

export default App;
