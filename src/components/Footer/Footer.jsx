import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css['footer']}>
      <div className={css['footer-text']}>
        <p>Сhoose us-</p>
        <NavLink to="/" className={css['footer-link']}>
          Rental Car
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
