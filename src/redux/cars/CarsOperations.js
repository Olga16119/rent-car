import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6554dfc263cafc694fe722d5.mockapi.io/';

export const getAllCars = createAsyncThunk('cars/getCars', async (_, thunkAPI) => {
  try {
    const { data: carData } = await axios.get(`/adverts?page=1&limit=12`);

    return { carData };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFavourites = createAsyncThunk( 'cars/getFavourites',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get(`/favourites`);

      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCars = createAsyncThunk(
  'cars/addCars',
  async ({ model = '', page = 1, limit = 12 }, thunkAPI) => {
    try {
      const responce = await axios.get(
        `/adverts?model=${model}&page=${page}&limit=${limit}`
      );
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCar = createAsyncThunk(
  'cars/getCar',
  async (payload, thunkAPI) => {
    try {
      const responce = await axios.get(`/adverts/${payload}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filtersCars = createAsyncThunk(
  'cars/filtersCars',
  async ({ carBrand, price, from, to, page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/adverts?make=${carBrand}&page=${page}&limit=${limit}`
      );

      if (carBrand === '' && price === 0 && from === 0 && to === 0) return data;

      let filteredData = [...data];

      if (price !== 0) {
        filteredData = filteredData.filter(({ rentalPrice }) => {
          let isRel = Number(rentalPrice.split('$')[1]) <= price;

          return isRel;
        });
      }

      if (to !== 0 && from <= to) {
        filteredData = filteredData.filter(({ mileage }) => {
          let isMileage = Number(mileage) >= from && Number(mileage) <= to;

          return isMileage;
        });
      }

      return filteredData;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFavourite = createAsyncThunk(
  'cars/toggleFavourite',
  async ({ id, isFavourite }, thunkAPI) => {
    try {
      if (isFavourite) {
        const { data } = await axios.get(`/favourites?carId=${id}`);
        const { id: carId } = data[0];

        await axios.delete(`/favourites/${carId}`);

        return { id, isFavourite };
      }

      const { data } = await axios.get(`/adverts/${id}`);

      const { data: favData } = await axios.post(`/favourites`, {
        carId: id,
        ...data,
      });

      return { id, isFavourite, car: data[0], carId: favData.id };
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);