import Panel from './Panel';
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
          className="my-8"
        />
      ) : (
        <div className="flex">
          <Panel>{data}</Panel>
          <button className="bg-red-500 h-fit my-8" onClick={handleClickSave}>
            Save
          </button>
        </div>
      )}
      <button
        className="bg-white rounded-md text-xl font-medium p-2 hover:bg-green-500 duration-200 ease-in-out"
        onClick={handleClickTask}
      >
        Generate Task
      </button>
    </div>
  );
}

export default TaskGenerator;
