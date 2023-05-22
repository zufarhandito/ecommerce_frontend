import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { doUpdate, update } from '../redux/action/ActionReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUser = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredUser, setFiltered] = useState(location.state?.users);

  // let { user, message, refresh } = useSelector((state) => state.userReducer);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useEffect(() => {}, []);

  const handleRegistration = (data) => {
    data.id = filteredUser.id;
    dispatch(doUpdate(data));

    navigate('/users');
  };

  const handleError = (errors) => {};

  const registerOptions = {
    username: { required: 'Username is required' },
    firstname: { required: 'Firstname is required' },
    lastname: { required: 'Lastname is required' },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <label>Username</label>
          <input
            defaultValue={filteredUser.username}
            type="text"
            name="username"
            {...register('username', registerOptions.username)}
          />
          {errors?.username && errors.username.message}
        </div>
        <div>
          <label>Password</label>
          <input
            // defaultValue={props.filteredUser.password}
            type="text"
            name="password"
            {...register('password', registerOptions.password)}
          />
          {errors?.password && errors.password.message}
        </div>
        <div>
          <label>Firstname</label>
          <input
            defaultValue={filteredUser.customer.firstname}
            type="text"
            name="firstname"
            {...register('firstname', registerOptions.firstname)}
          />
          {errors?.firstname && errors.firstname.message}
        </div>
        <div>
          <label>Lastname</label>
          <input
            defaultValue={filteredUser.customer.lastname}
            type="text"
            name="lastname"
            {...register('lastname', registerOptions.lastname)}
          />
          {errors?.lastname && errors.lastname.message}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
