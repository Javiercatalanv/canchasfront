import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ReservationPage.css';

export default function ReservationPage() {
  const { id } = useParams(); // ID de la cancha
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState<'online' | 'presencial'>('online');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reserva:', { id, name, rut, email, payment });
    alert(`Reserva confirmada para cancha ${id}`);
  };

  return (
    <div className="reservation-page">
      <div className="reservation-box">
        <button className= "back-button" onClick={() => navigate('/dashboard')}> ← </button>
        <h2>Reserva para Cancha {id}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="RUT"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="online"
                checked={payment === 'online'}
                onChange={() => setPayment('online')}
              />
              Pago Online
            </label>
            <label>
              <input
                type="radio"
                value="presencial"
                checked={payment === 'presencial'}
                onChange={() => setPayment('presencial')}
              />
              Pago Presencial
            </label>
          </div>
          <button type="submit">Confirmar Reserva</button>
        </form>
      </div>
    </div>
  );
}

