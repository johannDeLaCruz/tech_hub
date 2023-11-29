const TechDetailedInfoData = [
  {
    title: "Product Information",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    ],
  },
  {
    title: "Features",
    description: [
      "This chair is used by asasadasdadsdasd",
      "This chair is used by asasadasdadsdasd",
    ],
  },
  {
    title: "Release History",
    description: ["22/07/15 - First Release", "08/08/15 - Second Version"],
  },
  {
    title: "Plans",
    description: ["Free Trial Available", "Paid Plans Start From"],
  },
  {
    title: "Categories",
    description: ["Software", "Unity", "Unreal", "Other"],
  },
  {
    title: "Social Links",
    description: ["Instagram", "Twitter", "Patreon"],
  },
  {
    title: "Social Links",
    description: "VideoLink",
  },
  {
    title: "Added",
    description: "November 13, 2022",
  },
];

const TechDetailedInfo = () => {
  return (
    <div className="p-4">
      {TechDetailedInfoData.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 ">
          <h2 className="text-h4">{item.title}</h2>
          <ul className="list-disc text-body2 pl-5 marker:text-primary-500">
            {Array.isArray(item.description) ? (
              item.description.map((desc, index) => <li key={index}>{desc}</li>)
            ) : (
              <li key={index}>{item.description}</li>
            )}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TechDetailedInfo;
