import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import favouritesReducer from './api/favouritesSlice';
// import advertsApi from './api/advertsApi';
import { carsReducer } from './cars/carsSlice';
import { filtersReducer } from './filter/filterReducer';
// import { filterApi } from './advertsApi/advertsSlice';

// const favouritePersistConfig = {
//   key: 'favourites',
//   storage,
//   whitelist: ['favourites'],
// };

export const store = configureStore({
  reducer: { cars: carsReducer,
    filters: filtersReducer,
  },
  //   favourites: persistReducer(favouritePersistConfig, favouritesReducer),
  //  [advertsApi.reducerPath]: advertsApi.reducer,
  //     //  [makesFilterAPI.reducerPath]: makesFilterAPI.reducer,
  // },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  //     .concat(advertsApi.middleware)
  //     // .concat(filterApi.middleware),
});

export const persistor = persistStore(store);