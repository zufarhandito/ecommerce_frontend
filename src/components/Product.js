import React, { useEffect, useState } from 'react';
import Content from './content';
import { delete_product, getAllProduct } from '../redux/action/ActionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmDelete from './ConfirmDelete';

const Product = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [whatToDelete, setWhatToDelete] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { products, message, refresh } = useSelector(
    (state) => state.productReducer,
  );
  // console.log(products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [refresh]);

  const getWhatToDelete = (data) => {
    setWhatToDelete(data);
    setIsDelete(true);
  };

  const deleteDataa = () => {
    dispatch(delete_product(whatToDelete.id));
    setIsDelete(false);
  };

  const goToEdit = (item) => {
    navigate(`/edit-product/${item.id}`, {
      state: {
        products: item,
      },
    });
  };

  return (
    <Content title="product">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(products || []).map((item) => (
          <div class="bg-white shadow-lg hover:shadow-none rounded-lg p-4">
            <div
              class="min-h-48 md:h-64 bg-cover bg-center rounded-lg "
              style={{
                backgroundImage: `url(http://localhost:8000/uploads/${item.image})`,
              }}
            ></div>
            <h2 class="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-sm mb-2">{item.product_category.name}</p>
            <div className="h-20">
              <p className="overflow-hidden">{item.description}</p>
            </div>
            <div className="flex gap-4 justify-between">
              <button
                className="text-blue-500"
                onClick={() => {
                  goToEdit(item);
                }}
              >
                edit
              </button>

              <button
                onClick={() => {
                  getWhatToDelete(item);
                }}
                className="text-red-600"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isDelete ? (
        <ConfirmDelete
          show={isDelete}
          name={whatToDelete.name}
          closeModal={() => setIsDelete(false)}
          id={whatToDelete.id}
          funcion={getWhatToDelete}
          table="Product"
          remove={deleteDataa}
        />
      ) : (
        ''
      )}
    </Content>
  );
};

export default Product;
