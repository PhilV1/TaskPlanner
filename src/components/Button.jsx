import classNames from 'classnames';

function Button({ className, children, primary, danger, ...rest }) {
  const classes = classNames(`px-2   w-6 duration-300 ease-in-out`, className, {
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
