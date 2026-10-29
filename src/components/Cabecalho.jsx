import { Link } from 'react-router-dom';
import './Cabecalho.css';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h2 className="logo">CATÁLOGO<span>FILMES</span></h2>
      <ul className="menu">
        <li><Link to="/">INÍCIO</Link></li>
        <li><Link to="/create">CRIAR</Link></li>
        <li><Link to="/update">ALTERAR</Link></li>
        <li><Link to="/delete">APAGAR</Link></li>
      </ul>
    </header>
  );
}

export default Cabecalho;