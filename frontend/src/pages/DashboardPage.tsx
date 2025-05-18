import { useState } from 'react';
import '../styles/DashboardPage.css';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import AvailableCourts from '../components/AvailableCourts';
import NotificationsPanel from '../components/NotificationsPanel';
import ProfilePage from './ProfilePage';
import MyReservationsPage from './MyReservationsPage';

export default function DashboardPage() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedOption, setSelectedOption] = useState('home');

  const renderMainContent = () => {
    switch (selectedOption) {
      case 'perfil':
        return <ProfilePage />;
      case 'reservas':
        return <MyReservationsPage />;
      case 'home':
      default:
        return (
          <>
            <h2 className="section-title">Canchas disponibles</h2>
            <FilterBar />
            <AvailableCourts />
          </>
        );
    }
  };

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <button className="menu-toggle" onClick={() => setShowSidebar(!showSidebar)}>
          ☰
        </button>
        <h1 className="dashboard-title"></h1>
      </header>

      <div className="dashboard-body">
        {showSidebar && (
          <Sidebar
            onSelect={(opt) => {
              setSelectedOption(opt);
            }}
          />
        )}

        <main className="dashboard-content">
          {renderMainContent()}
        </main>

        <NotificationsPanel />
      </div>
    </div>
  );
}
