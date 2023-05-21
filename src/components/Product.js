import React, { useEffect, useState } from 'react';
import Content from './content';
import { getAllProduct } from '../redux/action/ActionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmDelete from './ConfirmDelete';

const Product = () => {
  const [hasilForm, setHasilform] = useState('');
  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();
  let { products, message, refresh } = useSelector(
    (state) => state.productReducer,
  );

  useEffect(() => {
    dispatch(getAllProduct());
  }, [refresh]);

  return (
    <Content title="product">
      {/* {isDelete ? <ConfirmDelete table="Product" /> : ''} */}
      <div className="w-full grid grid-cols-3 gap-4">
        {(products || []).map((item) => (
          <div className=" bg-white p-5">
            <h3>{item.name}</h3>
            <div className="border-black">
              <img
                className="h-80 w-full"
                src={`http://localhost:8000/uploads/${item.image}`}
              ></img>
            </div>
            <p>{`Rp. ${item.price}`}</p>
            <p>{item.description}</p>
            <Link to={`/edit-product/${item.id}`} className="text-blue-600">
              edit
            </Link>
            <button onClick={() => setIsDelete(true)} className="text-red-600">
              delete
            </button>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default Product;
