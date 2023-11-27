import OrderMenu from "@components/OrderMenu";

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
      <div className="mx-auto flex justify-between w-full sm:max-w-xl">
        <button className="text-h4 custom-hover hover:opacity-70">
          Filter results
        </button>
        <OrderMenu />
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
          className="w-full sm:max-w-xl rounded-3xl bg-gray-950 text-body2 custom-hover"
        />
      </div>
      <hr />
    </main>
  );
};

export default Home;
