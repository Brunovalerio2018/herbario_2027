import React, { useState } from 'react';
import { api } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

export const Dashboard: React.FC = () => {
  const [codigo, setCodigo] = useState('');
  const [acesso, setAcesso] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  const handleBuscar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.get(`/acessos/${codigo}`);
      setAcesso(response.data);
    } catch (err) {
      alert('Acesso não encontrado ou erro na busca.');
      setAcesso(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Plataforma Integrada BAG + CNPO</h1>
        <button onClick={logout} style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sair
        </button>
      </header>

      <form onSubmit={handleBuscar} style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Digite o código do acesso (ex: PLANT0012)..." 
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {acesso && (
        <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
          <h2>Acesso: {acesso.numero_acesso}</h2>
          <p><strong>Espécie:</strong> {acesso.especie?.genero} {acesso.especie?.especie}</p>
          <p><strong>Nome Comum:</strong> {acesso.especie?.nome_comum}</p>
          <p><strong>Localização na Embrapa:</strong> {acesso.bag?.localizacao || 'Não informado'}</p>
          <p><strong>Situação do Germoplasma:</strong> {acesso.situacao}</p>
          <p><strong>Registro Herbário (CNPO):</strong> {acesso.exsicata?.numero_registro || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};