import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Dark mode has been disabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About textUtils" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your Text Below" mode={mode} />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
