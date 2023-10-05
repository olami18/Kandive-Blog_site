import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Protected({ token }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error(error);
        setMessage('Access denied');
      }
    };

    if (token) {
      fetchProtectedData();
    }
  }, [token]);

  return (
    <div>
      <h2>Protected Route</h2>
      <p>{message}</p>
    </div>
  );
}

export default Protected;
