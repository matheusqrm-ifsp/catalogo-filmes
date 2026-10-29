import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Formulario.css';

function Update() {
  const [idPesquisa, setIdPesquisa] = useState('');
  const [values, setValues] = useState(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setErro('');
    setValues(null);

    axios.get(`https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes/${idPesquisa}`)
      .then(res => setValues(res.data))
      .catch(() => setErro('Filme não encontrado com este ID.'));
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes/${idPesquisa}`, values)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  }

  return (
    <div className='page-container'>
      <div className='form-card'>
        <h2>Alterar Filme</h2>
        
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

        {values && (
          <form onSubmit={handleUpdate}>
            <div className='mb-3'>
              <label className="form-label">Nome</label>
              <input type="text" className='form-control' value={values.nome} onChange={e => setValues({ ...values, nome: e.target.value })} />
            </div>
            <div className='mb-3'>
              <label className="form-label">Gênero</label>
              <input type="text" className='form-control' value={values.genero} onChange={e => setValues({ ...values, genero: e.target.value })} />
            </div>
            <div className='mb-3'>
              <label className="form-label">Ano</label>
              <input type="text" className='form-control' value={values.ano} onChange={e => setValues({ ...values, ano: e.target.value })} />
            </div>
            <div className='mb-3'>
              <label className="form-label">URL do Pôster</label>
              <input type="text" className='form-control' value={values.poster} onChange={e => setValues({ ...values, poster: e.target.value })} />
            </div>
            <div className='mb-4'>
              <label className="form-label">Streaming</label>
              <input type="text" className='form-control' value={values.streaming} onChange={e => setValues({ ...values, streaming: e.target.value })} />
            </div>
            <div className="botoes-form">
              <button type="submit" className='btn-custom btn-primary'>Salvar Alterações</button>
              <Link to="/" className='btn-custom btn-secondary'>Cancelar</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Update;