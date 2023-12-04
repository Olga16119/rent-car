import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import css from './BrandInput.module.css'

const BrandInput=({ value })=> {
  const [carsBrands] = useState([
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ]);

  return (
    <FormInput
      label="Car brand"
      name="carBrand"
       classesBox={[css['car-brand-input']]}
      value={value}
      placeholder="Enter the text"
      isThereSublist={true}
      list={carsBrands}
    />
  );
}

export default BrandInput;
