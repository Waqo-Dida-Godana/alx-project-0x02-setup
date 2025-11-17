import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      className={`bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
