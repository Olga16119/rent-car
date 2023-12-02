import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    addToFavourites(state, action) {   toast.success('Successfully added to favourites');
      return {
        ...state,
        favourites: [...state.favourites].concat(action.payload),
      };
    },
    deleteFromFavourites(state, action) {
    toast.success('Removed from favourites');
      return {
        ...state,
        favourites: state.favourites.filter(item => item.id !== action.payload.id),
      };
    },
  },
});

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;

