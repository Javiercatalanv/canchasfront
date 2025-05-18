import Notifications from './components/notifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import ReservationPage from './pages/ReservationPage';
import ProfilePage from './pages/ProfilePage';
import MyReservationsPage from './pages/MyReservationsPage';
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reserva/:id" element={<ReservationPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/mis-reservas" element={<MyReservationsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
