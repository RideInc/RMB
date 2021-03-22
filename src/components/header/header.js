import React from 'react';

import SynchButton from '../synch_button';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <SynchButton />
      <h1>Redux Memory Base</h1>
    </div>
  );
};

export default Header;
