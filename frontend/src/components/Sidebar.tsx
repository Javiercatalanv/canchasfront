import '../styles/Sidebar.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSelect: (option: 'home' | 'perfil' | 'reservas') => void;
}

export default function Sidebar({ onSelect }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // borra sesión, token, etc.
    navigate('/'); // redirige al login
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Perfil"
          className="profile-pic"
        />
        <h3>¡Hola, Usuario!</h3>
      </div>

      <ul className="menu">
        <li onClick={() => onSelect('home')}>Inicio</li>
        <li onClick={() => onSelect('perfil')}>Perfil</li>
        <li onClick={() => onSelect('reservas')}>Canchas Reservadas</li>
        <li onClick={handleLogout} className="logout">Cerrar Sesión</li>
      </ul>
    </aside>
  );
}

