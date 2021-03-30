import React from 'react';

import Profile from './profile';
import SynchButton from './synch_button';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Profile />
      <SynchButton />
      <h1>Redux Memory Base</h1>
    </div>
  );
};

export default Header;
