import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get('https://6ae36cc6933120ae20f8c29a.mockapi.io/filmes')
      .then(res => setFilmes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className="grid-filmes">
        {filmes.map((filme) => (
          <Link to={`/read/${filme.id}`} key={filme.id} className="card-filme">
            <img src={filme.poster} alt={filme.nome} className="poster" />
            <div className="overlay">
              <h3>{filme.nome}</h3>
              <p>{filme.genero} • {filme.ano}</p>
              <span className="streaming-tag">{filme.streaming}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;