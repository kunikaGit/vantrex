import React from 'react';
import './button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const buttonClass = `button-common btn--${variant} btn--${size} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className='button-inner'>
        <span className='text'>{children}</span>
      </div>
      <div className='gr1'></div>
      <div className='gr2'></div>

    </button>
  );
};

export default Button;