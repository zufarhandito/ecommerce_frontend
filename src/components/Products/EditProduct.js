import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { update_product } from '../../redux/action/ActionReducer';

const EditProduct = () => {
  const [filteredProduct, setFilteredProduct] = useState('');

  let { products, message, refresh } = useSelector(
    (state) => state.productReducer,
  );

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let defaultValue = {};

    defaultValue.name = filteredProduct.name;
    defaultValue.price = filteredProduct.price;
    defaultValue.category_id = filteredProduct.category_id;
    defaultValue.description = filteredProduct.description;
    reset({ ...defaultValue });

    const filterProduct = products.filter((a) => a.id == params.id)[0];
    setFilteredProduct(filterProduct);
  }, []);

  const registerOptions = {
    name: { required: 'Name is required' },
    category_id: { required: 'Category is required' },
    price: { required: 'Price is required' },
    image: { required: 'Image is required' },
    description: { required: 'Description is required' },
  };

  const handleRegistration = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('image', data.image[0]);
    formData.append('category_id', data.category_id);
    formData.append('description', data.description);
    formData.append('price', data.price);
    // formData.append('id', filteredProduct?.id);
    // console.log();
    // console.log(...formData);
    // console.log(data);
    const idProduct = filteredProduct.id;
    dispatch(update_product(formData, idProduct));
    setTimeout(() => {
      navigate('/products');
    }, 3000);
  };

  const handleError = () => {};

  return (
    <div>
      <form
        className="flex "
        onSubmit={handleSubmit(handleRegistration, handleError)}
      >
        <div className="w-1/2">
          <input type="file" {...register('image')} name="image" id="image" />
        </div>

        <div className="w-1/2">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Nama Produk
            </span>
            <input
              defaultValue={filteredProduct.name}
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="text"
              name="name"
              {...register('name', registerOptions.name)}
            />
            <p className="text-red-500">
              {errors?.name && errors.name.message}
            </p>
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium text-slate-700">
              Kategori
            </span>
            <input
              defaultValue={filteredProduct.category_id}
              id="category_id"
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-slate-200 rounded-md text-sm  placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              type="number"
              name="category_id"
              {...register('category_id', registerOptions.category_id)}
            />
            <p className="text-red-500">
              {errors?.category_id && errors.category_id.message}
            </p>
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium text-slate-700">
              Harga
            </span>
            <input
              defaultValue={filteredProduct.price}
              type="number"
              id="price"
              className="mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              // type="text"
              name="price"
              {...register('price', registerOptions.price)}
            />
            <p className="text-red-500">
              {errors?.price && errors.price.message}
            </p>
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium text-slate-700">
              Deskripsi
            </span>
            <textarea
              defaultValue={filteredProduct.description}
              className="mt-1 block border h-auto w-full border-slate-300 rounded-md text-sm shadow-sm"
              {...register('description')}
            ></textarea>
            <p className="text-red-500">
              {errors?.description && errors.description.message}
            </p>
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
