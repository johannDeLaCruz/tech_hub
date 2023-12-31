
const UserStats = ({ signOuthandle, user }) => {
  const { email, username } = user;

  return (
    <section className="container text-center pt-14">
      <h1 className="font-heading text-h2">{username}</h1>
      <span className="text-caption">{email}</span>
      <div className="relative py-4">
        <button className="btn-white px-14 py-2 mr-3" onClick={signOuthandle}>
          Logout
        </button>
        <button
          href=""
          className="absolute border rounded-full border-primary-500 p-2  "
        >
          <svg
            className="fill-primary-500 stroke-primary-500 h-4 w-4 "
            viewBox="0 0 24 24"
          >
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
          </svg>
        </button>
      </div>
      <ul className="grid grid-cols-3 max-w-2xl mx-auto py-6">
        {user &&
          Object.entries(user).map(([key, value], index) => {
            if (["username", "dateCreated", "_id"].includes(key)) {
              return (
                <li key={index}>
                  <span className="text-h4">{value}</span>
                  <p className="text-caption">
                    {key[0].toUpperCase() + key.slice(1).toLowerCase()}
                  </p>{" "}
                </li>
              );
            }
            return null;
          })}
      </ul>
      <hr />
    </section>
  );
};

export default UserStats;
