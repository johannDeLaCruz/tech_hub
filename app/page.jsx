const Home = () => {
  return (
    <main className="container">
      <h1 className="text-center font-heading text-h1">
        <span>Tech</span>
        <span className="text-primary-500">Hub</span>
      </h1>
      <h2 className="text-h3 uppercase text-center pb-4">
        THE LARGEST VR/AR/XR TOOLS DIRECTORY, UPDATED DAILY
      </h2>
      <hr />
      <div className="mx-auto flex justify-between w-full sm:max-w-xl py-1">
        <button className="text-h4 focus:outline-none focus:ring-2 focus:ring-inset hover:opacity-70">
          Filter results
        </button>
        <label htmlFor="orderBy" className="sr-only">
          Order By
        </label>
        <select
          name="orderBy"
          id="orderBy"
          className="text-black p-2 border border-gray-300 rounded-md leading-tight focus:outline-none focus:ring-1 focus:border-primary-500 focus:ring-primary-500 bg-transparent"
        >
          <option value="Order By"></option>
          <option value="Newest"></option>
          <option value="Rating"></option>
          <option value="A-Z"></option>
          <option value="Z-A"></option>
        </select>
      </div>
      <div className="flex justify-center pb-6">
        <label htmlFor="search" className="sr-only">
          Search technologies...
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="  Search technologies..."
          className="w-full sm:max-w-xl rounded-3xl p-3 bg-gray-950 text-body2 leading-tight focus:outline-none focus:ring-1 focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
      <hr />
    </main>
  );
};

export default Home;
