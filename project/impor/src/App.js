import logo from './logo.svg';
import './App.css';
import Bio from'./component/Bio';
import Contact from'./component/Contact';
import Experience from'./component/Experience';
import Skill from'./component/Skill';

function App() {
  return (
   <main>
    <h1>VIKASH KUMAR ROY</h1>
    <Bio />
    <hr/>
    <Experience/>
    <hr/>
    <Contact />
    <hr/>
    <Skill/>
   </main>
  );
}

export default App;
