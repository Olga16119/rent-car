import Card from 'components/Card/Card';
import css from './AdvertsList.module.css';

const AdvertsList = ({ cars }) => {
  return (
    <>
      <ul className={`${css['flex-container']} ${css['catalog-list']}`}>
        {cars.map(car => (
          <Card car={{ car }} />
        ))}
      </ul>
    </>
  );
};

export default AdvertsList;
