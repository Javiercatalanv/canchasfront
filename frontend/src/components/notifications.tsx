import { useEffect, useState } from 'react';
import { socket } from '../socket';

export default function Notifications() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {

    socket.on('notification', (data: { message: string }) => {
      setMessage(data.message);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      zIndex: 9999
    }}>
      🔔 {message}
    </div>
  );
}
