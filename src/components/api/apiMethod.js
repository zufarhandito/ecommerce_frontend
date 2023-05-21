import axios from '../config/endpoint';

const findAll = () => {
  return axios.get('/users');
};
const create = (data) => {
  return axios.post('/users/sp', data);
};
const getById = (id) => {
  return axios.get(`/users/${id}`);
};

const updateUserCustomer = (data) => {
  return axios.patch(`/users/${data.id}`, data);
};

const remove = (id) => {
  return axios.delete(`/users/${id}`);
};

const findAllProduct = () => {
  return axios.get('/products');
};

const createProduct = (data) => {
  return axios.post('/products', data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

const updateProduct = (data, id) => {
  return axios.patch(`/products/${id}`, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};

export default {
  findAll,
  create,
  getById,
  updateUserCustomer,
  remove,
  findAllProduct,
  createProduct,
  updateProduct,
};
