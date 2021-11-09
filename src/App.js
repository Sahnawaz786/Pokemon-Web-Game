import logo from './logo.svg';
import './App.css';
import PokemonImg from './PokemonImg/index';
import PokeForm from './PokeForm/index';
import {ToastContainer} from 'react-toastify'

function App() {
  return (

    <div className="App">
           <h1>Pokemon's</h1>
           <PokeForm />
           <ToastContainer />
     </div>
  );
}

export default App;
