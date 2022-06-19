import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Links from './Links';
function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
      <div>
        <HelloWorld />
      </div>
      <div>
        <HelloWorld />
      </div>
      <div>
        <HelloWorld />
      </div>
      <div className= "Links" >
        <Links/>
      </div>
    </>
  );
}

export default App;
