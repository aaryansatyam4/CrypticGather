import { useState } from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Clear username and password from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    // Reload the page or redirect to login page
    window.location.reload(); // Or navigate to the login page using react-router-dom if you're using it
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
