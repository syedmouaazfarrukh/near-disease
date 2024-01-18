import logo from './logo.svg';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <InfoBox/>
      </div>

      <div>
        <VisualBox/>
      </div>


    </div>
  );
}


function InfoBox(){

  return (
    <div className='InfoBox'>
    </div>

  )

}

function VisualBox(){

  return (
    <div className='VisualBox'>
    </div>

  )

}

export default App;
