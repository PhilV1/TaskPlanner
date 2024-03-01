import TaskPanel from './TaskPanel';
import ClipLoader from 'react-spinners/ClipLoader';

function TaskGenerator({ data, handleClickSave, handleClickTask, loading }) {
  return (
    <div className="flex  items-center bg-slate-500 flex-col pt-6 ">
      <h1 className="font-bold text-white  text-3xl">TaskPlanner</h1>
      {loading ? (
        <ClipLoader
          color={'#22c55e'}
          loading={loading}
          size={50}
          className="m-6"
        />
      ) : (
        <div className="flex flex-col">
          <TaskPanel handleClickSave={handleClickSave}>{data}</TaskPanel>{' '}
          <button
            className="bg-gray-600 rounded-b-lg text-lg text-white font-medium p-2 hover:bg-green-600 duration-200 ease-in-out"
            onClick={handleClickTask}
          >
            Random Task
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskGenerator;
