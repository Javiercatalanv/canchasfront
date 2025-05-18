import { useNavigate } from 'react-router-dom';
import '../styles/AvailableCourts.css';

export default function AvailableCourts() {
  const navigate = useNavigate();

  const handleClick = (courtId: number) => {
    navigate(`/reserva/${courtId}`); // ← redirige a ReservationPage
  };

  return (
    <div className="courts-container">
      {[1, 2, 3, 4, 5].map((courtId) => (
        <div
          key={courtId}
          className="court-card"
          onClick={() => handleClick(courtId)}
        >
          Cancha {courtId}
        </div>
      ))}
    </div>
  );
}
