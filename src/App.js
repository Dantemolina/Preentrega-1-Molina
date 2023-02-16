import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import CartWidget from './Componentes/CartWidget';
import Landing from './Componentes/Landing';

function App() {
  return (
  <>
    <CartWidget />
    <NavBar />
    <Landing />
  </>
  );
}

export default App;
