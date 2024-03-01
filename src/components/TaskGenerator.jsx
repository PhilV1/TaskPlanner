import React from 'react';

function TaskGenerator() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col ">
      <h1 className="font-bold text-white  text-3xl">Task generator.</h1>
      {loading ? (
        <ClipLoader
          color={'#22c55e'}
          loading={loading}
          size={50}
          className="my-8"
        />
      ) : (
        <div className="flex">
          {/* Panel start */}
          <Panel>{data}</Panel>
          {/* Panel end */}
          <button className="bg-red-500 h-fit my-8" onClick={handleClickSave}>
            Save
          </button>
        </div>
      )}
      <button
        className="bg-white rounded-md text-xl font-medium p-2 hover:bg-green-500 duration-200 ease-in-out"
        onClick={handleClickTask}
      >
        Another Task
      </button>
    </div>
  );
}

export default TaskGenerator;
