import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test2 from "./components/Test2";
import AddEmployee from "./components/addEmployee"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="50" width="50"/>
      </header> */}
      <div className="App-body">
      {/*<Test2 />*/}
      <AddEmployee />
      </div>
    
    </div>
  );
}

export default App;
