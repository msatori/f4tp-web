import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Home />
      </main>
    </div>
  );
}

export default App;
