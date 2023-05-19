import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import apiMethod from './api/apiMethod';

const EditUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    data.id = props.userById.id;
    await apiMethod.updateUserCustomer(data);
    props.closeModal();
    // console.log(data);
  };

  const handleError = (errors) => {};

  const registerOptions = {
    username: { required: 'Username is required' },
    firstname: { required: 'Firstname is required' },
    lastname: { required: 'Lastname is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  return (
    <div>
                  <form
                        onSubmit={handleSubmit(handleRegistration, handleError)}
                      >
                        <div>
                          <label>Username</label>
                          <input
                            defaultValue={props.userById.username}
                            type="text"
                            name="username"
                            {...register('username', registerOptions.username)}
                          />
                          {errors?.username && errors.username.message}
                        </div>
                        {/* <div>
                          <label>Password</label>
                          <input
                            // defaultValue={props.userById.password}
                            type="text"
                            name="password"
                            {...register('password', registerOptions.password)}
                          />
                          {errors?.password && errors.password.message}
                        </div> */}
                        <div>
                          <label>Firstname</label>
                          <input
                            defaultValue={props.userById.customer.firstname}
                            type="text"
                            name="firstname"
                            {...register(
                              'firstname',
                              registerOptions.firstname,
                            )}
                          />
                          {errors?.firstname && errors.firstname.message}
                        </div>
                        <div>
                          <label>Lastname</label>
                          <input
                            defaultValue={props.userById.customer.lastname}
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
