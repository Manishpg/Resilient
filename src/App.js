import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Program from './components/Program/Program';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Confirm from './components/Confirm';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
         <Route path="/program" component={Program}/>
         <Route exact path="/" component={About}/>
         <Route exact path="/donate" component={Donate}/>
         <Route path="/confirm" component={Confirm} />
         <Route path="/error" component={Error} />
       </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
