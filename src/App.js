import './App.css';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Main></Main>
      
    </div>
  );
}

export default App;
