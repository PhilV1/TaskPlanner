import React from 'react';
import classNames from 'classnames';

function Button({ className, children, primary, danger, ...rest }) {
  const classes = classNames(`px-2  hover:rounded-lg w-6`, rest.className, {
    'hover:text-green-600': primary,
    'hover:text-red-600': danger,
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
