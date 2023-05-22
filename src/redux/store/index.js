import { configureStore } from '@reduxjs/toolkit';
import userReducers from '../reducer/userReducer';
import { combineReducers } from '@reduxjs/toolkit';
import productReducers from '../reducer/productReducer';
import productCategoryReducers from '../reducer/productCategoryReducer';

//simpan data di reducer
const reducer = combineReducers({
  userReducer: userReducers,
  productReducer: productReducers,
  productCategoryReducer: productCategoryReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
