import { useEffect, useState } from 'react';
import FormInput  from '../FormInput/FormInput';

import css from './PriceInput.module.css';


const PriceInput=({ value }) =>{
  const [carsPrices, setCarsPrices] = useState([]);

  useEffect(() => {
    const prices = [];

    for (let i = 10; i <= 1000; i += 10){
      prices.push(i);
    }

    setCarsPrices(prices);
  }, []);

  return (
    <FormInput
      label="Price/ 1 hour"
      name="price"
      value={value}
      isThereTextPlaceHolder={true}
      textPlaceHolder={"To"}
      classesInput={[css['car-price-input']]}
      placeholder="$"
      isThereSublist={true}
      list={carsPrices}
    />
  );
}

export default PriceInput;