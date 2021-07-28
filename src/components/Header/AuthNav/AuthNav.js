import routs from '../../../routs';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to={routs.registration}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={routs.login}>Login</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
