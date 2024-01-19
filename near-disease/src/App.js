import logo from './logo.svg';
import bg from './bg3.jpg';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      
      <header className="App-header"></header>

      <InfoBox/>
      {/* <VisualBox/> */}
     
      


    </div>
  );
}


function InfoBox(){
  return (
    <div className='InfoBox'>
      <LogoBox/>
      <VisualBox/>
    </div>

  )
}



function VisualBox(){
  return (
    <div className='VisualBox'>
    </div>

  )
}


function LogoBox(){
  return (
    <div className='LogoBox'>
    </div>

  )
}


export default App;
