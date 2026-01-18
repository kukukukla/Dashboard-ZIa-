import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import '../styles/Dashboard.css';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Carregar dados do dashboard
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulação de API call
        setData([
          { id: 1, title: 'Métrica 1', value: 100 },
          { id: 2, title: 'Métrica 2', value: 200 },
          { id: 3, title: 'Métrica 3', value: 150 }
        ]);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <MainContent data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Dashboard;
