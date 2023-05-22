import ActionTypes from '../action/ActionTypes';

const initialState = {
  categories: [],
  message: '',
  refresh: '',
};

function productCategoryReducers(state = initialState, action) {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case ActionTypes.GET_CATEGORY:
      return { state, categories: payload, refresh: true };
    default:
      return state;
  }
}

// console.log(productCategoryReducers());

export default productCategoryReducers;
