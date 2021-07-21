import React from 'react';
import routs from '../../routs';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to={routs.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={routs.registration}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={routs.login}>Login</NavLink>
      </li>
      <li>
        <NavLink to={routs.contacts}>Contacts</NavLink>
      </li>
    </ul>
  );
};

export default Header;
