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
    <>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
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
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditUser;
