import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    console.log('Disconnected from the internet.');
    setIsOnline(false);
  };

  const handleOnline = () => {
    console.log('Connected to the internet.');
    setIsOnline(true);
  };

  useEffect(() => {
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    console.log('mounted');

    return () => {
      console.log('unmounted');
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
