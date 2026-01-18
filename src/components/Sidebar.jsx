import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#users">Usuários</a></li>
          <li><a href="#products">Produtos</a></li>
          <li><a href="#sales">Vendas</a></li>
          <li><a href="#reports">Relatórios</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
