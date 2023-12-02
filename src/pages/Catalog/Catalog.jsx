import AdvertsList from '../../components/AdvertsList/AdvertsList';

import { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import { useGetAllQuery } from 'redux/api/advertsApi';
import Loader from 'components/Loader/Loader';
import NoContent from 'components/NoContent/NoContent';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { getAllCars } from 'redux/cars/CarsOperations';

const Catalog = () => {
//   const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  //  const [limit, setLimit] = useState(9);
  //   const [totalPages, setTotalPages] = useState(0);
  //      const [searchFilters, setSearchFilters] = useState({});
  //   const [isSearch, setIsSearh] = useState(false);
  //   const [filteredCarsArr, setFilteredCarsArr] = useState([]);

//   const { data: advertsAll, isFetching, isLoading } = useGetAllQuery();
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
//   useEffect(() => {
//     if (!advertsAll) return;
//   });

  //       setLimit(6);
  //     if (isDesktop) {
  //       setLimit(12);
  //     }

  //     if (!isSearch) {
  //       const paginatedCars = paginateCars({
  //         arr: allAdverts,
  //         limit,
  //         currentPage,
  //       });
  //       setCars(paginatedCars);
  //       setTotalPages(Math.ceil(allAdverts.length / limit));
  //     } else {
  //       const paginatedFilteredCars = paginateCars({
  //         arr: filteredCarsArr,
  //         limit,
  //         currentPage,
  //       });
  //       setCars(paginatedFilteredCars);
  //       setTotalPages(Math.ceil(filteredCarsArr.length / limit));
  //     }
  //   }, [allAdverts, currentPage, limit, isSearch, filteredCarsArr, isDesktop]);

  //       useEffect(() => {
  //     scrollSmooth({ arr: cars, limit });
  //   }, [cars, limit]);

  const handleLoadMore = () => {
    setCurrentPage(page => page + 1);
  };

  //       const handleSearch = ({ make, rentalPrice, from, to }) => {
  //     const isSameSearch =
  //       make === searchFilters.make &&
  //       rentalPrice === searchFilters.rentalPrice &&
  //       from === searchFilters.from &&
  //       to === searchFilters.to;

  //     if (isSameSearch) {
  //       return;
  //     }

  //     setSearchFilters({ make, rentalPrice, from, to });
  //     setIsSearh(true);
  //     const filteredCars = filterCars({
  //       carsArr: allAdverts,
  //       make,
  //       rentalPrice,
  //       from,
  //       to,
  //     });

  //     if (filteredCars.length > 0) {
  //       toast(`${filteredCars.length} cars found`, { icon: '🔍' });
  //     } else {
  //       toast.error('There is no match');
  //     }

  //     setFilteredCarsArr(filteredCars);
  //   };

  return (
    <>
      {/* {isLoading || isFetching ? (
        <Loader
          position={{
            textAlign: 'center',
          }}
        />
      ) : cars.length !== 0 ? ( */}
        <AdvertsList cars={cars} />
      {/* ) : (
        <NoContent message={'Sorry, nothing was found'} />
      )} */}

      <Button onButtonClick={handleLoadMore} title="Load More" />
    </>
  );
};
export default Catalog;
