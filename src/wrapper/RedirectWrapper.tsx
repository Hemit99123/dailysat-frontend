import React from 'react';

const RedirectWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='flex text-gray-500 text-sm'>{children}</div>;
};

export default RedirectWrapper;