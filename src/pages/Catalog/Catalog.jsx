import { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import NoContent from 'components/NoContent/NoContent';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFilters } from 'redux/selectors';
import { addCars, getAllCars } from 'redux/cars/CarsOperations';
import css from './Catalog.module.css';
import Filter from 'components/Filter/Filter';
import AdvertsList from 'components/AdvertsList/AdvertsList';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch])

  const { isButtonShown } = useSelector(selectCars);
  const { carBrand } = useSelector(selectFilters);

  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    dispatch(addCars({ page: page + 1, carBrand }));
    setPage(page + 1);
  };

  return (
    <>
      <section className={css['section']}>
        <div className={css['container']}>
      <Filter />
      {isLoading ? (
        <Loader
          position={{
            textAlign: 'center',
          }}
        />
      ) : cars.length !== 0 ? (
        <NoContent message={'Sorry, nothing was found'}/>
      ) : (
        <AdvertsList cars={cars} />
      )}
      {isButtonShown ? (
        <Button onButtonClick={handleLoadMore} styles={css['btn-LoadMore']} title="Load More" />
      ) : null}</div></section>
    </>
  );
};
export default Catalog;

