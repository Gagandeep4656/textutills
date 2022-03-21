import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

   const showAlert= (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
         setAlert(null);   
    }, 1500);
   }

  const removeBodyClasses =()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
   
}

  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls )
    if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        // document.title = "Textutils - Dark mode"
        // setInterval(() => {
        //   document.title = "Textutils is Amazing"
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install Textutills now"
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        // document.title ="Textutils - Light mode"
      }

  }
  return (
    <>
     <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route  path="/" element={ <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter , Character counter, Remove extra spaces" mode={mode}/> } />
      </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;
