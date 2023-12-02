import { useDispatch, useSelector } from 'react-redux';
import css from './Card.module.css';
import {
  addToFavourites,
  deleteFromFavourites,
} from 'redux/api/favouritesSlice';
import TagsList from 'components/TagsList/TagsList';
import Button from '../Button/Button';
import shortAddress from 'utils/shortAddress';
import { selectorFavourites } from '../../redux/api/selectors.js';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal';

const favButton = {
  CHECKED: 'checked',
  NOT_CHECKED: 'not-checked',
};

const Card = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    type,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    accessories,
  } = car;

  const dispatch = useDispatch();
  const favourites = useSelector(selectorFavourites);

  const [variant, setVariant] = useState(favButton.NOT_CHECKED);
  const [isAddToFavourites, setIsAddToFavourites] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal(prev => !prev);

  useEffect(() => {
    if (favourites.length !== 0) {
      setIsAddToFavourites(favourites.some(fav => fav.id === id));

      if (isAddToFavourites) {
        setVariant(favButton.CHECKED);
      } else {
        setVariant(favButton.NOT_CHECKED);
      }
    }
  }, [favourites, id, isAddToFavourites]);

  const handleClickFavourite = () => {
    dispatch(
      isAddToFavourites ? deleteFromFavourites(car) : addToFavourites(car)
    );
  };

  return (
    <>
      <div className={css['car-card']}>
        <div className={css['image-thumb']}>
          <img
            className={css['image']}
            src={img ? img : '../../images/NO_photo.webp'}
            alt={make}
            loading="lazy"
          />
        </div>

        <div className={css['description']}>
          <p>
            {`${make} `}
            <span className={css['accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>

          <p>{rentalPrice}</p>
        </div>

        <TagsList
          data={{
            address: shortAddress(address),
            rentalCompany,
            type,
            model,
            mileage,
            accessories,
          }}
        />

        <Button title="Learn more" onButtonClick={toggleModal} />

        <button onClick={handleClickFavourite} className={css['favorite-btn']}>
          <svg
            className={`${css['icon']} ${css[variant]}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isShowModal && <Modal onClose={toggleModal} data={car} />}
    </>
  );
};

export default Card;
