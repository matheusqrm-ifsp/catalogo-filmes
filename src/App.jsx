import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/update' element={<Update />} />
        <Route path='/delete' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;