import { NavLink } from 'react-router-dom';

const NavItem = ({ className, icon, text, path, onClick }) => {
  return (
    <li>
      <NavLink className={className} to={path} onClick={onClick}>
        <img className={`icon ${icon}-icon`} src={icon} alt={`${text} Icon`} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;