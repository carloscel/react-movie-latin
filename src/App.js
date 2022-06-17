import {Menu} from './componentes/Menu';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {RecuperadorDatos} from './componentes/RecuperadorDatos';
import { Detalles } from './paginas/Detalles';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<RecuperadorDatos />}/>
        <Route path='/:id' element={<Detalles />}/>
      </Routes>
       
    </div>
  );
}

export default App;
