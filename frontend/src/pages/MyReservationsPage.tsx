import { useState } from 'react';
import '../styles/MyReservationsPage.css'; // crea este archivo

type Reserva = {
  id: number;
  cancha: number;
  fecha: string;
  hora: string;
  estado: 'activa' | 'cancelada';
};

export default function MyReservationsPage() {
  const [reservas, setReservas] = useState<Reserva[]>([
    { id: 1, cancha: 2, fecha: '2025-05-10', hora: '17:00', estado: 'activa' },
    { id: 2, cancha: 4, fecha: '2025-05-12', hora: '19:00', estado: 'activa' },
  ]);

  const cancelarReserva = (id: number) => {
    const confirmacion = window.confirm('¿Estás seguro de cancelar esta reserva?');
    if (!confirmacion) return;

    setReservas((prev) =>
      prev.map((r) => (r.id === id ? { ...r, estado: 'cancelada' } : r))
    );
  };

  const editarReserva = (id: number) => {
    alert(`Aquí iría la lógica para editar la reserva ${id} 😉`);
  };

  return (
    <div className="reservations-container">
      <h2 className="section-title">Mis Reservas</h2>

      {reservas.length === 0 ? (
        <p className="no-reservations">No tienes reservas registradas.</p>
      ) : (
        reservas.map((reserva) => (
          <div
            key={reserva.id}
            className={`reservation-card ${reserva.estado === 'cancelada' ? 'cancelada' : ''}`}
          >
            <div className="reservation-info">
              <p><strong>Cancha:</strong> {reserva.cancha}</p>
              <p><strong>Fecha:</strong> {reserva.fecha} — <strong>Hora:</strong> {reserva.hora}</p>
              <p><strong>Estado:</strong> {reserva.estado}</p>
            </div>

            {reserva.estado === 'activa' && (
              <div className="reservation-actions">
                <button className="cancel-button" onClick={() => cancelarReserva(reserva.id)}>Cancelar</button>
                <button className="edit-button" onClick={() => editarReserva(reserva.id)}>Editar</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

