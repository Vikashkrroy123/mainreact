import logo from './logo.svg';
import './App.css';
import Cont from'./component/Cont'
import {useState} from 'react';

function App() {
  
const traceable=useState(0);
  const counter=traceable[0];
  const updateCounter=traceable[1];
 function vi() {
   updateCounter((current_value)=>{
const new_value=current_value+1;
return new_value;
   });
  }
  const vikash=["red", "black", "green", "blue"]
  return (
    <main>
      <Cont color="red" rr="white" p="Vikash" k="200px"/>
      <Cont color="green" rr="blue" p="Beauty" k="300px"/>
      <Cont color="blue" rr="green" p="ranjan" k="100px"/>
      <Cont color="yellow" p="Komal" k="240px"/>
      <button onClick={vi}>Click me</button>
<p >Type:{vi}getss values</p>
      </main>
  );
}

export default App;
