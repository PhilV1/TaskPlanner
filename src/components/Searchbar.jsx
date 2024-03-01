function Searchbar({ handleChange, term, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className=" sm:w-96 min-w-60">
        <div className="flex justify-between">
          <input
            type="text"
            onChange={handleChange}
            value={term}
            className="rounded-md px-2 w-full mr-2"
            placeholder="Create a new task..."
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-2 rounded-md hover:bg-green-600 easw-in-out duration-300"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Searchbar;
