import ActionTypes from './ActionTypes';
import apiMethod from '../../components/api/apiMethod';

export const getAll = () => async (dispatch) => {
  try {
    const res = await apiMethod.findAll();
    dispatch({
      type: ActionTypes.GET_USERS,
      payload: res.data,
    });
    // console.log(res.data);
  } catch (error) {
    alert(error.message);
  }
};

export const create = (data) => async (dispatch) => {
  try {
    const res = await apiMethod.create(data);
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: res.data,
    });
    // return res.message;
    console.log('kajsdnaks');
  } catch (error) {
    alert(error.message);
  }
};

export const update = (data) => async (dispatch) => {
  try {
    const res = await apiMethod.updateUserCustomer(data);
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const remove = (id) => async (dispatch) => {
  try {
    const res = await apiMethod.remove(id);
    dispatch({
      type: ActionTypes.DEL_USER,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const res = await apiMethod.findAllProduct();
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const create_product = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const res = await apiMethod.createProduct(data);
    dispatch({
      type: ActionTypes.ADD_PRODUCT,
      payload: res.data,
    });
    // console.log(res);
  } catch (error) {
    alert(error.message);
  }
};

export const update_product = (data, id) => async (dispatch) => {
  try {
    console.log(id);
    const res = await apiMethod.updateProduct(data, id);
    dispatch({
      type: ActionTypes.UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const delete_product = (id) => async (dispatch) => {
  try {
    const res = await apiMethod.deleteProduct(id);
    dispatch({
      type: ActionTypes.DEL_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const get_product_categories = () => async (dispatch) => {
  try {
    const res = await apiMethod.getProductCat();
    console.log(res.data);
    dispatch({
      type: ActionTypes.GET_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};
