import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Formulario.css';
import './Detalhes.css';

function Delete() {
  const [idPesquisa, setIdPesquisa] = useState('');
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setErro('');
    setFilme(null);

    axios.get(`https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes/${idPesquisa}`)
      .then(res => setFilme(res.data))
      .catch(() => setErro('Filme não encontrado com este ID.'));
  }

  const handleDelete = () => {
    const confirm = window.confirm("Tem certeza que deseja apagar este filme permanentemente?");
    if (confirm) {
      axios.delete(`https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes/${idPesquisa}`)
        .then(() => navigate('/'))
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='page-container'>
      <div className='form-card'>
        <h2>Apagar Filme</h2>
        
        <form onSubmit={handleSearch} className="search-bar">
          <input 
            type="text" 
            className='form-control' 
            placeholder="Digite o ID do filme..." 
            value={idPesquisa} 
            onChange={e => setIdPesquisa(e.target.value)} 
            required
          />
          <button className='btn-custom btn-primary'>Procurar</button>
        </form>

        {erro && (
          <div className='alert-erro'>
            {erro}
            <br />
            <Link to="/">Voltar para Início</Link>
          </div>
        )}

        {filme && (
          <div className="text-center mt-4">
            <img src={filme.poster} alt={filme.nome} style={{ width: '150px', height: '225px', objectFit: 'cover' }} className="rounded shadow mb-3" />
            <h3>{filme.nome}</h3>
            <p style={{ color: '#b3b3b3' }}>ID: {filme.id} | {filme.ano}</p>
            
            <div className="botoes-form" style={{ justifyContent: 'center' }}>
              <button onClick={handleDelete} className='btn-custom btn-danger'>Confirmar Exclusão</button>
              <Link to="/" className='btn-custom btn-secondary'>Cancelar</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Delete;