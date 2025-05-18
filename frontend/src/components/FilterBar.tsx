import '../styles/FilterBar.css';

export default function FilterBar() {
    return (
      <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <label>Fecha: <input type="date" /></label>
        <label style={{ marginLeft: '1rem' }}>Hora: <input type="time" /></label>
      </div>
    );
  }
  