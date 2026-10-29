import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detalhes.css';

function Read() {
  const [filme, setFilme] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='page-container'>
      <div className='detalhes-card'>
        <img src={filme.poster} alt={filme.nome} className="detalhes-poster" />
        <div className="detalhes-info">
          <h1>{filme.nome}</h1>
          <div className="meta-info">
            <span>{filme.ano}</span>
            <span>{filme.genero}</span>
          </div>
          <p className="sinopse">Disponível exclusivamente em <strong>{filme.streaming}</strong>.</p>
          <div className="botoes">
            <Link to="/" className='btn-custom btn-secondary'>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;