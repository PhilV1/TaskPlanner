import classNames from 'classnames';
import { MdPostAdd } from 'react-icons/md';

function Panel({ children, className, handleClickSave, ...rest }) {
  const classes = classNames(
    className,
    'bg-white p-4 rounded-t-lg text-xl font-medium  mt-6 sm:w-96 min-w-60 flex justify-between items-center'
  );

  return (
    <div className={classes} {...rest}>
      {children}{' '}
      <button onClick={handleClickSave}>
        <MdPostAdd className="text-2xl ml-2 hover:text-green-600 duration-300 ease-in-out" />
      </button>
    </div>
  );
}

export default Panel;
