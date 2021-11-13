import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [modetext, setmodeText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);
  

  const showalert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      setmodeText("Enable Light Mode");
      showalert("Dark Mode Enabled","success");
      //document.title ="TextEd - Dark Mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setmodeText("Enable Dark Mode");
      showalert("Light Mode Enabled","success");
      //document.title = "TextEd - Light Mode";
    }
  }
  return (
    <>
    <Router>
     <Navbar title ="TextEd" aboutText ="About" mode ={mode} toggleMode={toggleMode} modetext={modetext} />
     <Alert alert = {alert} />
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm alert={showalert} heading = "Enter text to analyze" mode={mode} />
          </Route>
      </Switch>
            
     </div>
    </Router>
    </>  
  );
}

export default App;
