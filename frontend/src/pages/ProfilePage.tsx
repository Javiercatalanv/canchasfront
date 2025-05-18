import '../styles/ProfilePage.css';

export default function ProfilePage() {
  // Aquí puedes cargar datos reales del usuario desde localStorage o backend
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="profile-page">
      <div className="profile-box">
        {/* Foto de perfil */}
        <div className="profile-picture">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Perfil"/>
        
        </div>
        
        <h2>Mi Perfil</h2>

        <div className="profile-info">
          <p><strong>Nombre:</strong> {user.name || 'Botas Ismael'}</p>
          <p><strong>Correo:</strong> {user.email || 'usuario@example.com'}</p>
        </div>

      </div>
    </div>
  );
}
