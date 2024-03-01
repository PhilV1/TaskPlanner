import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const classes = classNames(
    className,
    'bg-white p-4 rounded-lg text-xl font-medium m-6 sm:w-96 min-w-60'
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
