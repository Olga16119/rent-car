import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from 'redux/cars/CarsOperations';
import { selectCars } from 'redux/selectors'; 
import AdvertsList from 'components/AdvertsList/AdvertsList';
import Loader from 'components/Loader/Loader';
import css from './Favourites.module.css'

const Favourites=()=> {
  const dispatch = useDispatch();
  const { favourites, isLoading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getFavourites());
  }, [dispatch]);

  return (
    <>
      <section className={css['section']}>
        <div className={css['container']}>
          {isLoading ? (
           <Loader/>
          ) : favourites.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No cars in your list</p>
          ) : (
            <>
              <AdvertsList cars={favourites} />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Favourites;