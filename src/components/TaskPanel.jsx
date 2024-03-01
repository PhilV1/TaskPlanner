import classNames from 'classnames';
import { MdPostAdd } from 'react-icons/md';

function Panel({ children, className, handleClickSave, ...rest }) {
  const classes = classNames(
    className,
    'bg-white p-4 rounded-lg text-xl font-medium m-6 sm:w-96 min-w-60 flex justify-between items-center'
  );

  return (
    <div className={classes} {...rest}>
      {children}{' '}
      <button onClick={handleClickSave}>
        <MdPostAdd className="text-2xl ml-2" />
      </button>
    </div>
  );
}

export default Panel;
