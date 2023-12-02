import { createSlice } from '@reduxjs/toolkit';

import {
  getAllCars,
  addCars,
  getFavourites,
  filterCars,
  toggleFavourite,
} from './CarsOperations.js';

const carsInitialState = {
  cars: [],
  isButtonShown: true,
  favourites: [],
  isLoading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: {
    [toggleFavourite.fulfilled](state, { payload }) {
      if (payload.isFav) {
        state.favourites = state.favourites.filter(
          ({ carId }) => carId !== payload.id
        );
      }
    },
    [getAllCars.pending](state) {
      state.isLoading = true;
    },
    [getAllCars.fulfilled](state, { payload }) {
      state.cars = payload.carData;
      state.favourites = payload.favData;
      state.isLoading = false;
    },
    [getAllCars.rejected](state, action) {
      console.log('rejected');
      state.isLoading = false;
    },
    [addCars.fulfilled](state, { payload }) {
      state.cars.push(...payload);

      if (payload.length < 12) state.isButtonShown = false;
      else state.isButtonShown = true;
    },
    [addCars.rejected](state, action) {
      console.log('rejected');
    },
    [getFavourites.pending](state, { payload }) {
      state.isLoading = true;
    },
    [getFavourites.fulfilled](state, { payload }) {
      state.favourites = payload;
      state.isLoading = false;
    },
    [getFavourites.rejected](state, { payload }) {
      state.isLoading = false;
    },

    [filterCars.fulfilled](state, { payload }) {
      state.cars = [...payload];

      if (payload.length < 12) state.isButtonShown = false;
      else state.isButtonShown = true;
    },
    [filterCars.rejected](state, action) {
      console.log('rejected');
    },
  },
});

export const carsReducer = carsSlice.reducer;
