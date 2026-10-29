import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Formulario.css';

function Create() {
  const [values, setValues] = useState({ nome: '', genero: '', ano: '', poster: '', streaming: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes', values)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  }

  return (
    <div className='page-container'>
      <div className='form-card'>
        <h2>Adicionar Novo Filme</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className="form-label">Nome do Filme</label>
            <input type="text" className='form-control' required onChange={e => setValues({ ...values, nome: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label className="form-label">Gênero</label>
            <input type="text" className='form-control' required onChange={e => setValues({ ...values, genero: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label className="form-label">Ano de Lançamento</label>
            <input type="text" className='form-control' required onChange={e => setValues({ ...values, ano: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label className="form-label">URL do Pôster</label>
            <input type="url" className='form-control' required onChange={e => setValues({ ...values, poster: e.target.value })} />
          </div>
          <div className='mb-4'>
            <label className="form-label">Streaming</label>
            <input type="text" className='form-control' required onChange={e => setValues({ ...values, streaming: e.target.value })} />
          </div>
          <div className="botoes-form">
            <button type="submit" className='btn-custom btn-primary'>Salvar Filme</button>
            <Link to="/" className='btn-custom btn-secondary'>Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;