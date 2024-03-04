function Searchbar({ handleChange, term, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className=" sm:w-96 w-64 mb-2">
        <div className="flex justify-between">
          <input
            type="text"
            onChange={handleChange}
            value={term}
            className="rounded-l-lg px-2 py-1 w-full focus:outline-green-600  "
            placeholder="Create a new task..."
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-2 rounded-r-lg hover:bg-green-600 ease-in-out duration-300"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Searchbar;
