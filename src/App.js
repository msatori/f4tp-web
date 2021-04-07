import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import MarketInfo from './pages/Market';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Header />
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/market'>
              <MarketInfo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
