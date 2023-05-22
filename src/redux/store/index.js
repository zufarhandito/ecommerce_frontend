import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import userReducers from '../reducer/userReducer';
import { combineReducers } from '@reduxjs/toolkit';
import rootSaga from '../saga';

// import productReducers from '../reducer/productReducer';
// import productCategoryReducers from '../reducer/productCategoryReducer';

//simpan data di reducer
// const reducer = combineReducers({
//   userReducer: userReducers,
//   productReducer: productReducers,
//   productCategoryReducer: productCategoryReducers,
// });

const logger = createLogger();
const saga = createSagaMiddleware();
const reducer = combineReducers({
  userReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(saga),
});

saga.run(rootSaga);

export default store;
