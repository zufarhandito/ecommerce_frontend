import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import apiMethod from './api/apiMethod';

const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    const result = await apiMethod.create(data);
    props.closeModal();
    props.message(result.data);
    console.log(result.data);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 mb-8 text-center text-gray-900"
                  >
                    {props.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <form
                        onSubmit={handleSubmit(handleRegistration, handleError)}
                      >
                        <div className="flex flex-col">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700">
                              Username
                            </span>
                            <input
                              id="username"
                              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                              type="text"
                              name="username"
                              {...register(
                                'username',
                                registerOptions.username,
                              )}
                            />
                            <p className="text-red-500">
                              {errors?.username && errors.username.message}
                            </p>
                          </label>
                        </div>
                        <div>
                          <label className="block mt-4">
                            <span className="block text-sm font-medium text-slate-700">
                              Password
                            </span>
                            <input
                              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                              type="text"
                              name="password"
                              {...register(
                                'password',
                                registerOptions.password,
                              )}
                            />
                            <p className="text-red-500">
                              {errors?.password && errors.password.message}
                            </p>
                          </label>
                        </div>
                        <div className="grid">
                          <div>
                            <label className="block  mt-5">
                              <span className="block text-sm font-medium text-slate-700">
                                Firstname
                              </span>
                              <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                name="firstname"
                                {...register(
                                  'firstname',
                                  registerOptions.firstname,
                                )}
                              />
                              <p className="text-red-500">
                                {errors?.firstname && errors.firstname.message}
                              </p>
                            </label>
                          </div>
                          <div>
                            <label className="block mt-5">
                              <span className="block text-sm font-medium text-slate-700">
                                Lastname
                              </span>
                              <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                name="lastname"
                                {...register(
                                  'lastname',
                                  registerOptions.lastname,
                                )}
                              />
                              <p className="text-red-500">
                                {errors?.lastname && errors.lastname.message}
                              </p>
                            </label>
                          </div>
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

export default AddUser;
