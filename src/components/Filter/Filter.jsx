import { useDispatch, useSelector } from 'react-redux';
import { filtersCars } from 'redux/cars/CarsOperations';

import css from './Filter.module.css'
import { selectFilters } from 'redux/selectors'; 
import BrandInput from './components/BrandInput/BrandInput';
import PriceInput from './components/PriceInput/PriceInput';
import IntervalInput from './components/IntervalInput/IntervalInput';

 const Filter=()=> {
  const { carBrand, price, from, to } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const buttonHandler=(event)=> {
    event.preventDefault();

    const filterObject = {
      carBrand,
      price: Number.parseInt(price),
      from: Number.parseInt(from),
      to: Number.parseInt(to),
    };

    dispatch(filtersCars(filterObject));
  }

  return (
    <form className={css['form']}>
      <BrandInput value={carBrand} />
      <PriceInput value={price} />
      <IntervalInput fromValue={from} toValue={to} />
      <button
        className={`${css['search-button']} ${css["button"]}`}
        type="submit"
        onClick={buttonHandler}
      >
        Search
      </button>
    </form>
  );
}

export default Filter

