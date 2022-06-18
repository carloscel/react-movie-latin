import {Menu} from './componentes/Menu';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import {RecuperadorDatos} from './componentes/RecuperadorDatos';
import { Detalles } from './paginas/Detalles';
import { Cartelera } from './componentes/Cartelera';
import { SearchBox } from './componentes/SearchBox';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Menu />
        <SearchBox />
      </div>
      <Routes>
        <Route path='/' element={<Cartelera />}/>
        <Route path='/:id' element={<Detalles />}/>
      </Routes>
       
    </div>
  );
}

export default App;
