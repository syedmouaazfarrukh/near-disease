import logo from './logo.svg';
import bg from './bg3.jpg';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import LoginSignup from './components/LoginSignup/LoginSignup';
import DiseaseSlider from './components/DiseaseSlider/DiseaseSlider';


function App() {
  return (
    <div className="App">
      <LoginSignup/>
      <DiseaseSlider/>











      {/* <ParticlesBackground/> */}
      {/* <header className="App-header"></header> */}
      {/* <AppGrid /> */}
    </div>
  );
}

function AppGrid() {
  return (
    // <></>
    <div className='AppGrid'>
      <div className='AppGrid-child'>
        <LoginSignup/>
      </div>

      {/* <LoginBox/> */}
      {/* <LogoBox/> */}
      {/* <VisualBox/> */}

    </div>
  );
}


function LoginBox() {
  return (
    <div className='VisualBox'>
    </div>

  )
}

function VisualBox() {
  return (
    <div className='VisualBox'>
    </div>

  )
}

function LogoBox() {
  return (
    <div className='LogoBox'>
    </div>

  )
}




export default App;
