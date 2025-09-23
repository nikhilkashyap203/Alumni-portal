import React from 'react'; // Adjust the path and extension to match your actual logo file

const HeaderLogo = () => (
  <header style={{ display: 'flex', alignItems: 'left', padding: '1rem 2rem' }}>
    <img src="/image/alumni.png" alt="Logo" style={{ height: '50px', width: '100px', objectFit: 'contain' }} />
  </header>
);

export default HeaderLogo;
