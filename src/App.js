import { useState } from 'react';
import './App.css';
import Direction from './Direction';
import Map from './Map';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className="App">
      {/* <Map/> */}
      
      <div>
        <input type="text" placeholder="Form" onBlur={ (e)=>setOrigin(e.target.value) }/>
       <br/>
        <input type="text" placeholder="To" onBlur={(e) => setDestination(e.target.value)}/>
        <br/>
  <button   >
            Build Route
          </button>
        </div>
      <Direction origin={origin} destination={ destination}/>
    </div>
  );
}

export default App;
