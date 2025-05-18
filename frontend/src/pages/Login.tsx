import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginRegister.css';

const UserIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zM313.6 288h-16.7c-22.2 10.3-46.9 16-72.9 
    16s-50.6-5.7-72.9-16h-16.7C89.5 288 0 377.5 0 488c0 13.3 10.7 24 24 
    24H424c13.3 0 24-10.7 24-24c0-110.5-89.5-200-200.4-200z" />
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" fill="white" viewBox="0 0 448 512">
    <path d="M400 192h-24V144C376 64.6 311.4 0 232 0S88 64.6 88 
    144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 
    64H400c35.3 0 64-28.7 64-64V256C464 220.7 435.3 192 400 
    192zM136 144c0-52.9 43.1-96 96-96s96 43.1 96 
    96v48H136V144z" />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="input-icon"><UserIcon /></span>
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <span className="input-icon"><LockIcon /></span>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Entrar</button>
          <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
