import React,{ useState } from 'react';
import './App.css';
// import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const[mode,setmode]=useState('light');// check whether dark mode is enable or not 
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },2000);

  };
 const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enable,success!');

    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enable,success!');
    }
  }

  return (
    <>
    {/* <Router> */}
<Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
   {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
           
       <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          {/* </Route>
    </Routes> */}
</div>
{/* </Router> */}

 {/* adding new modify line that works for the new version */}

{/* <Router>
  <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />} />
    </Routes>
  </div>
</Router> */}




        
 {/* <About/>  */}
{/* <Navbar title="Textutils"/> */}
{/* <Navbar/> */} 
    </>
  );
}

export default App;
