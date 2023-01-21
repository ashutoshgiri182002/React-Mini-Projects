import React,{useState} from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }
  , 1500);
 }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
   <>

<BrowserRouter>
    <Navbar title= "Text-Utils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter your text here" mode = {mode} toggleMode = {toggleMode} />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>

 {/* <div className="container">
 <TextForm showAlert={showAlert} heading = "Enter your text here" mode = {mode} toggleMode = {toggleMode} />
 </div> */}

</BrowserRouter>
   </>
  );
}

export default App;
