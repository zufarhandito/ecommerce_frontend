import React, { useEffect, useState, Fragment } from 'react';
import apiMethod from './api/apiMethod';
import Content from './content';
import { Menu, Transition } from '@headlessui/react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ConfirmDelete from './ConfirmDelete';
import Success from './alert/success';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAll } from '../redux/action/ActionReducer';
import { useDispatch, useSelector } from 'react-redux';

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

const User = () => {
  let { user, message, refresh } = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  // const [user, setUser] = useState('');
  const [userById, setUserById] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [whatToDelete, setWhatToDelete] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  // const [message, setMessage] = useState('');

  const columns = [
    { name: 'No.' },
    { name: 'Username' },
    { name: 'Firstname' },
    { name: 'Lastname' },
    { name: 'Aksi' },
  ];

  useEffect(() => {
    dispatch(getAll())
  }, [refresh]);

  const getById = async (id) => {
    const result = await apiMethod.getById(id);
    setUserById(result.data);
    setIsOpenEdit(true);
  };

  const deleteUser = async (data) => {
    setWhatToDelete(data);
    setIsDelete(true);
    toast.success('haha');
  };

  const messageConfig = (response) => {
    setIsMessage(true);
    // setMessage(response.message);
  };

  return (
    <>
      {isOpen ? (
        <AddUser
          show={isOpen}
          closeModal={() => setIsOpen(false)}
          name="Daftarkan User dan Customer Baru"
          message={messageConfig}
        />
      ) : (
        ''
      )}
      {isOpenEdit ? (
        <EditUser
          show={isOpenEdit}
          userById={userById}
          closeModal={() => setIsOpenEdit(false)}
        />
      ) : (
        ''
      )}
      {isDelete ? (
        <ConfirmDelete
          show={isDelete}
          table="User"
          name={whatToDelete.username}
          id={whatToDelete.id}
          closeModal={() => setIsDelete(false)}
        />
      ) : (
        ''
      )}
      <Content
        title="User"
        isOpen={() => {
          setIsOpen(true);
        }}
      >
        {isMessage ? <Success message={message} /> : ''}
        <div className="p-5 rounded-md bg-white">
          <ToastContainer />
          <table className="min-w-full table-fixed ">
            <thead>
              <tr>
                {(columns || []).map((col) => (
                  <th className="pr-6 py-4 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                    <span className="">{col.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {(user || []).map((data, index) => (
                // {console.log(data[index])}
                // JSON.stringify(data.customer)
                <tr key={data.id}>
                  <td className="py-3 text-sm text-gray-600">{index + 1}</td>
                  <td className="py-3 text-sm text-gray-600">
                    {data.username}
                  </td>
                  <td className="py-3 text-sm text-gray-600">
                    {data.customer.firstname}
                  </td>
                  <td className="py-3 text-sm text-gray-600">
                    {data.customer.lastname}
                  </td>
                  <td>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          {/* <EllipsisVerticalIcon /> */}:
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-10 top-0 w-32 rounded-md bg-white shadow-lg focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    getById(data.id);
                                  }}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <EditActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <EditInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => deleteUser(data)}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <DeleteActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <DeleteInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Content>
    </>
  );
};

export default User;
