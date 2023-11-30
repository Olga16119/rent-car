import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css['home-container']}>
      <h1 className={css['hero-title']}>rental car </h1>
      <p className={css['hero-text']}>
        Here you can choose any car of your dreams
      </p>

      <Link to="/catalog" className={css['start-btn']}>
        Start search
      </Link>
    </div>
  );
};

export default Home;
