import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
        backgroundColor: '#444',
        position: 'fixed',
        top: 0,
        width: '98%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px 10px 20px'
      }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>WhatsApp</a>
    </nav>
  );
};

export default Navbar;