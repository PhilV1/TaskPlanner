function Container({ children }) {
  return (
    <div className="flex flex-col items-center gap-2 mt-4  sm:w-96 w-64 mx-auto rounded-lg">
      <div className="sm:w-96 w-64">
        <h2 className="flex justify-center items-center p-4 font-bold text-white  text-3xl">
          ToDo List
        </h2>
        {children}
      </div>
    </div>
  );
}

export default Container;
