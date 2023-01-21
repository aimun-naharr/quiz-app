import React from 'react';
import './App.css';
const code= require('../src/images/code.jpg') 



function App() {
  const startQuestion=()=>{

  }

  return (
    <div className="App" 
    style={{background: `linear-gradient(rgba(0,0,0,0.5), #020808), url(${code}) center/cover no-repeat`, height: '100vh'}}
    >
      quiz
        
    </div>
  );
}

export default App;
