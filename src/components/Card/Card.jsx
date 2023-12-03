import { useDispatch, useSelector } from 'react-redux';
import css from './Card.module.css';

import { selectCars } from 'redux/selectors';
import { toggleFavourite } from 'redux/cars/CarsOperations';
import { useEffect, useState } from 'react';
import TagsList from 'components/TagsList/TagsList';
import shortAddress from 'utils/shortAddress';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import heart from '../../images/img_svg/heart.svg';
import heart_active from '../../images/img_svg/heart_active.svg';

const Card = ({ car }) => {
  const { favourites } = useSelector(selectCars);
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const {
    id,
    img,
    make,
    model,
    year,
    type,carId,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    accessories,
  } = car;

    const ID = carId !== undefined ? carId : id;


  const handlerToggleFavorite = async ({ currentTarget }) => {
    const isFavourite = currentTarget.getAttribute('data-fav') === 'true';
    const id = currentTarget.getAttribute('data-id');

    dispatch(toggleFavourite({ id, isFavourite }));
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    setIsFavourite(favourites.some(({ carId }) => carId === ID));
  }, [favourites, ID]);

  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <>
      <li key={id} className={css['car-card']}>
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
            {`${make} `} <span className={css['accent']}>{`${model}`}</span>
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

        <Button title="Learn more" onButtonClick={toggleModal} styles='button'/>

        <button
          onClick={handlerToggleFavorite}
          className={`${css['favorite-btn']} ${isFavourite ? 'active' : ''}`}
          data-id={id}
          data-fav={isFavourite}
        >
          <img src={isFavourite ? heart_active : heart} alt="heart" />
        </button>
      </li>
      {isShowModal && <Modal onClose={toggleModal} data={car} />}
    </>
  );
};

export default Card;
