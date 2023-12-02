import Card from 'components/Card/Card';
import css from './AdvertsList.module.css';

const AdvertsList = ({ cars }) => {
  return (
    <>
      <ul className={css['catalog-list']}>
        {cars.map(car => (
          <li className={css['card-item']} key={car.id}>
            <Card data={car} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdvertsList;
