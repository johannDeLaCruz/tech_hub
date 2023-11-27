import OrderMenu from "@components/OrderMenu";
import TagsSelection from "@components/TagsSelection";

const Home = () => {
  return (
    <main className="container">
      <div className="p-4">
        <h1 className="text-center font-heading text-h1">
          <span>Tech</span>
          <span className="text-primary-500">Hub</span>
        </h1>
        <h2 className="text-h3 uppercase text-center">
          THE LARGEST VR/AR/XR TOOLS DIRECTORY, UPDATED DAILY
        </h2>
      </div>
      <hr />
      <div className="mx-auto flex justify-between w-full sm:max-w-2xl">
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
          className="mx-auto w-full sm:max-w-2xl rounded-3xl bg-gray-950 text-body2 custom-hover"
        />
      </div>
      <hr />
      <TagsSelection />
      <div className="mx-auto w-full sm:max-w-sm bg-gray-950 text-button text-center p-2 rounded-3xl">
        {" "}
        12 results
      </div>
    </main>
  );
};

export default Home;
