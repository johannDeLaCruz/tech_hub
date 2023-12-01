import TechRating from "@components/TechRating";

const TechBasicInfo = () => {
  return (
    <div className="bg-gray-950">
      <div className="container py-4 ">
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-h2">Product Name</h3>
          <a href="#">
            <svg
              className="fill-white stroke-white hover:stroke-primary-500 hover:fill-primary-500 link-hover"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </a>
          <span className="text-body1 grow text-end">Developer Name</span>
        </div>
        <TechRating />
      </div>
    </div>
  );
};

export default TechBasicInfo;
