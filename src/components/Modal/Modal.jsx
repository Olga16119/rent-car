import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import notFoundPhoto from '../../images/NO_photo.webp';

import css from './Modal.module.css';
import Tags from './components/Tags';
import shortAddress from 'utils/shortAddress';
import Accessories from './components/Accsessories';
import RentalState from './components/RentalState';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ data, onClose }) => {
  const {
    make,
    img,
    model,
    year,
    rentalPrice,
    address,
    accessories,
    mileage,
    description,
    functionalities,
    rentalConditions,
  } = data;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css['backdrop']} onClick={onBackdropClick}>
      <div className={css['modal']}>
        <div className={css['modal-container']}>
          <div className={css['image-thumb']}>
            <img
              className={css['image']}
              src={img ? img : notFoundPhoto}
              alt={make}
              loading="lazy"
            />
          </div>
          <p className={css['title']}>
            {`${make} `}
            <span className={css['accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>
          <Tags data={{ ...data, address: shortAddress(address) }} />
          <p className={css['description']}>{description}</p>
          <p className={css['modal-text']}>
            Accessories and functionalities:
          </p>
          <Accessories data={{ accessories, functionalities }} />
          <p className={css['modal-text']}>Rental Conditions:</p>
          <RentalState data={{ rentalConditions, mileage, rentalPrice }} />

          <a
            href="tel:+380730000000"
            className={css['rental-btn']}
          >
            Rental car
          </a>
 <div onClick={() => onClose()} className={css['close-btn']}></div>
          
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
