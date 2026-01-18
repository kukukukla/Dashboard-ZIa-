import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">ProjetoZeta</h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#reports">Relatórios</a></li>
            <li><a href="#settings">Configurações</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
