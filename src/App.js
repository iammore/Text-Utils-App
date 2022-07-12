import './App.css';
import React, {useState} from 'react'


 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import Accordian from './components/Accordian';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
setAlert({
  message:message,
  type:type
})

setTimeout(()=>{
setAlert(null)
},2000)
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#101435';
      showAlert("Dark Mode Enabled","success")
      document.title='TextUtils-Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success")
      document.title='TextUtils-Light Mode';
    }
  }


  return (
    <>
<Router>
<Navbar toggleMode={toggleMode}  mode={mode}/>
<Alert alert={alert}/>
<div className='container'>
<Routes>
  <Route path='/about' element={<Accordian/> }>  
 
  </Route>
<Route path='/' element={<TextForm  mode={mode}/>}>
</Route>
</Routes>
</div> 
</Router>
    </>
  );
}

export default App;
