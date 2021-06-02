import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";





import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import { Switch , Route, Redirect} from 'react-router';
import Navbar from './Navbar'
import Footer from './Footer'

const App=()=> {
  return (
    <div className="App">
      <Navbar/>
     <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component ={About} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Services" component ={Services} />
    <Redirect to ="/"/>
  

     </Switch>
     <Footer/>
     
    </div>
  );
}

export default App;
