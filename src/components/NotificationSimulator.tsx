import { useNotifications } from '../context/NotificationContext';
import { useState, useEffect } from 'react';

const notificationTemplates = [
  { type: 'info' as const, title: 'System Update', message: 'A new system update is available. Please review the changelog.' },
  { type: 'success' as const, title: 'Payment Received', message: 'Your payment of $299 has been successfully processed.' },
  { type: 'warning' as const, title: 'Low Storage', message: 'Your storage is running low. Consider upgrading your plan.' },
  { type: 'error' as const, title: 'Failed Sync', message: 'Unable to sync data. Please check your connection and try again.' },
];

export const NotificationSimulator = () => {
  const { addNotification } = useNotifications();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
      addNotification(template);
    }, 5000); // New notification every 5 seconds

    return () => clearInterval(interval);
  }, [isRunning, addNotification]);

  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
          addNotification(template);
        }}
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Notification
      </button>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 ${
          isRunning
            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
            : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
        }`}
      >
        {isRunning ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
            Stop Simulator
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Simulator
          </>
        )}
      </button>
    </div>
  );
};

