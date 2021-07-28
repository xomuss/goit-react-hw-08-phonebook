import React from 'react';
import { NavLink } from 'react-router-dom';
import routs from '../../../routs';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={routs.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={routs.contacts}>Contacts</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
