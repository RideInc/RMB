import React from 'react';

import Profile from './profile';
import SynchButton from './synch_button';
import ExitBtn from './exit_btn';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Profile />
      <SynchButton />
      <ExitBtn />
      <h1>Redux Memory Base</h1>
    </div>
  );
};

export default Header;
