import './App.css';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
