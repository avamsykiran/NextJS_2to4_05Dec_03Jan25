import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const makeStore = () => {
  const store =  configureStore({
    reducer: {
      theme: themeReducer,
    },
  });
  
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];