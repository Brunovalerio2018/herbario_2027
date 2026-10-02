import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Ajuste o endpoint conforme a controller de auth do seu NestJS
      const response = await api.post('/auth/login', { email, senha });
      login(response.data.access_token);
      navigate('/dashboard');
    } catch (err) {
      setErro('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleLogin} style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
        <h2>Painel Admin BAG + CNPO</h2>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <div style={{ marginBottom: '1rem' }}>
          <label>E-mail:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Senha:</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0056b3', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Entrar
        </button>
      </form>
    </div>
  );
};