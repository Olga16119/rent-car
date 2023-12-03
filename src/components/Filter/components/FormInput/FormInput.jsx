import css from './FormInput.module.css';

import arrowUp from '../../../../images/img_svg/arrow-up.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterReducer';
import ListInput from '../ListInput/ListInput';

const FormInput=({
  label,
  value,
  placeholder,
  name,
  classesBox = [],
  classesInput = [],
  autocomplete = 'off',
  isThereSublist = false,
  list = [],
  isThereTextPlaceHolder = false,
  textPlaceHolder = '',
})=> {
  const dispatch = useDispatch();

  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);

  const openSubMenu = () => {
    setIsSubmenuOpened(true);
    window.addEventListener('mousedown', closeOnWhiteSpace);
  };

  const closeSubMenu = () => {
    setIsSubmenuOpened(false);
    window.removeEventListener('mousedown', closeOnWhiteSpace);
  };

  const closeOnWhiteSpace = ({ target }) => {
    if (
      target.className.length !== 0 &&
      target.className[0].split(/_+/).join('') !== 'sub-list-box'
    ) {
      setIsSubmenuOpened(false);
      window.removeEventListener('mousedown', closeOnWhiteSpace);
    }
  };

  function inputHandler({ target }) {
    const name = target.getAttribute('name');
    let value = target.value;

    if (name === 'price' || name === 'from' || name === 'to') {
      if (String(value).length === 0) value = 0;
      else if (!value[value.length - 1].match(/\d/))
        value = value.substring(0, value.length - 1);
    }

    dispatch(setFilter({ name, value }));
  }

  return (
    <label
      htmlFor={name}
      className={`${css['input-box']} ${classesBox.join(' ')} ${
        isThereSublist ? css['thereIsSubList'] : ''
      } ${isThereTextPlaceHolder ? css['thereIsTextPlaceholder'] : ''}`}
    >
      <span className={css['label']}>{label}</span>
      {isThereTextPlaceHolder ? (
        <span className={css['text-placeholder']}>{textPlaceHolder}</span>
      ) : null}
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onFocus={openSubMenu}
        className={`${classesInput.join(' ')}`}
      />

      {isThereSublist ? (
        <>
          <img
            src={arrowUp}
            alt=""
            className={`${css['arrow']} ${
              isSubmenuOpened ? css['active'] : ''
            }`}
          />
          <ListInput
            list={list}
            isSubmenuOpened={isSubmenuOpened}
            closeSubMenu={closeSubMenu}
            name={name}
          />
        </>
      ) : null}
    </label>
  );
}

export default FormInput;