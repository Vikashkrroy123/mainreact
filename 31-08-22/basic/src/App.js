import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Vik from './component/Vik';
import Pop from './component/Pop';

function App() {
  const arr=[1,2,3,4,5]
  const styling={
color:"green",
backgroundColor:"white",
  }
  return (
    
<div className="App">
      <header className="App-header">
        <h3>I am vikash</h3>
        <Post m_arr={arr} />
        <Vik />
        <Pop v="RgEhhD"/>
        <Pop v="Yellowhh"/>
        <Pop v="greengg"/>
        <p style={styling}>Inline css</p>
     <h3 className='st'>God</h3>
      </header>
     
    </div>
  );
}

export default App;
