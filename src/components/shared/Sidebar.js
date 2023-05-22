import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  UserIcon,
  TagIcon,
  CubeIcon,
} from '@heroicons/react/24/solid';

const Sidebar = forwardRef(({ showNav }, ref) => {
  const listMenu = [
    { to: '/', path: '/', icon: <HomeIcon />, name: 'Home' },
    { to: 'users', path: '/users', icon: <UserIcon />, name: 'User' },
    {
      to: 'categories',
      path: '/categories',
      icon: <TagIcon />,
      name: 'Category',
    },
    { to: 'products', path: '/products', icon: <CubeIcon />, name: 'Product' },
  ];
  const { pathname } = useLocation();

  return (
    <div ref={ref} className="fixed z-20 w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <p className="rotate-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl mt-5 font-black ">
          Gokil <br /> Shop{' '}
        </p>
      </div>

      <div className="flex flex-col">
        {listMenu.map((arr) => (
          <Link to={`${arr.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathname === arr.path
                  ? 'bg-purple-100 text-purple-500'
                  : 'text-gray-400 hover:bg-purple-100 hover:text-purple-500'
              }`}
            >
              <div className="flex">
                <div className="w-5 mr-4">{arr.icon}</div>
                <div>{arr.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});
Sidebar.displayName = 'SideBar';

export default Sidebar;
