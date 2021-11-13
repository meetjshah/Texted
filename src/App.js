import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
//import Signup from './components/Signup';
//import Login from './components/Login';
//import Dashboard from './components/Dashboard';
//import NoteState from './context/notes/NoteState';
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
      //document.title ="Speedy Rent - Dark Mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setmodeText("Enable Dark Mode");
      showalert("Light Mode Enabled","success");
      //document.title = "Speedy Rent - Light Mode";
    }
  }
  return (
    <>
    {/* <NoteState> */}
    <Router>
     <Navbar title ="TextEd" aboutText ="About" mode ={mode} toggleMode={toggleMode} modetext={modetext} />
     <Alert alert = {alert} />
     <div className="container my-3"> {/* my-3 is margin of 3 in y axis, container is class of bootstrap */}
     <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm alert={showalert} heading = "Enter text to analyze" mode={mode} />
          </Route>
          {/* <Route exact path="/login">
            <Login mode={mode}/>
          </Route>
          <Route exact path="/signup">
            <Signup mode={mode} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard mode={mode}/>
          </Route> */}
      </Switch>
            
     </div>
    </Router>
    {/* </NoteState> */}
    </>  
  );
}

export default App;
