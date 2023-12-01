const userStats = [
  { name: "Favourites", value: 50 },
  { name: "User ID", value: "#24935" },
  { name: "Subscribed Since", value: "10/10/23" },
];

const UserStats = () => {
  return (
    <section className="container text-center pt-14">
      <h1 className="font-heading text-h2">Your_Username</h1>
      <span className="text-caption">ai@gmail.com</span>
      <div className="flex py-6 justify-center">
        <button className="btn-white px-12 py-2">Logout</button>
        <button href="" className="border rounded-full border-primary-500 self-center">
          <svg
            className="fill-primary-500 stroke-primary-500 h-8 w-8 "
            viewBox="0 0 24 24"
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
          </svg>
        </button>
      </div>
      <ul className="grid grid-cols-3 max-w-2xl mx-auto pb-8">
        {userStats.map((item, index) => (
          <li key={index}>
            <span className="text-h4">{item.value}</span>
            <p className="text-caption">{item.name}</p>{" "}
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
};

export default UserStats;
