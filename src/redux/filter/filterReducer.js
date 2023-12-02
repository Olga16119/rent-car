import { createSlice } from '@reduxjs/toolkit';

const filterLocalStorage = JSON.parse(localStorage.getItem('filters'));

const filtersInitialState = filterLocalStorage || {
  carBrand: '',
  price: 0,
  from: 0,
  to: 0,
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, { payload }) {
      const { name, value } = payload;

      state[name] = value;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;