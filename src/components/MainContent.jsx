import React from 'react';
import Card from './Card';
import '../styles/MainContent.css';

function MainContent({ data, isLoading }) {
  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Dashboard Principal</h2>
        <p>Bem-vindo ao ProjetoZeta Dashboard</p>
      </div>

      {isLoading ? (
        <div className="loading">Carregando dados...</div>
      ) : (
        <div className="cards-grid">
          {data && data.map((item) => (
            <Card key={item.id} title={item.title} value={item.value} />
          ))}
        </div>
      )}

      <div className="content-section">
        <h3>Análise Recente</h3>
        <p>Seção de análise de dados do sistema</p>
      </div>
    </main>
  );
}

export default MainContent;
