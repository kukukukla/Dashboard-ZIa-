import React from 'react';
import '../styles/Card.css';

function Card({ title, value }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <p className="card-value">{value}</p>
      </div>
      <div className="card-footer">
        <small>Última atualização: Agora</small>
      </div>
    </div>
  );
}

export default Card;
