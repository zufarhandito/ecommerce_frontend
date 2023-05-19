import React from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Success = (props) => {
  return (
    <div className="bg-green-500 py-3 px-8 my-2 rounded-md flex w-auto">
      <div className="flex">
        <div className="mr-3">
          <CheckCircleIcon className="w-6 text-white" />
        </div>
        <div className="text-white">{props.message}</div>
      </div>
      <div>
        <XMarkIcon className="" />
      </div>
    </div>
  );
};

export default Success;
