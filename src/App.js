import sky from './components/sky-loop.gif';
// import bird from './components/bird.gif';
import './App.css';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Uppercase from './components/Uppercase';
import React, { useState } from 'react';




function App() {

  //   const [alert, setalert] = useState(null)

  // const showalert = (message)=>{
  //   setalert({
  //     msg:message
  //   })

  //   setTimeout(() => {
  //     setalert (null)
  //   }, 1500);

  // }


  // UnComment all these lines in this page for Alert feature.



  const [Mode, setMode] = useState('light');

  // document.body.style.backgroundImage = `url(${bird})`;
  document.body.style.backgroundColor = 'powderblue';
  // document.body.style.backgroundRepeat = "no-repeat";
  
  
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      
      // showalert("dark mode enabled")

      document.body.style.opacity = '0.5';

      document.body.style.backgroundImage = `url(${sky})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";

    }

    else {
      setMode('light')
      // showalert("light mode enabled")


      // document.body.style.backgroundImage = `url(${bird})`;

      document.body.style.opacity = '1';
      document.body.style.backgroundImage = 'none';
    }
  }



  return (
    <>
      <Navbar mode={Mode} toggleMode={toggleMode} />
      {/* <Alert alert = {alert}/> */}
      <div className="container my-3 ">
        <Uppercase mode={Mode} />
      </div>



    </>

  );
}

export default App;
