const TagsSelection = () => {
  const tags = [
    "VR",
    "AR",
    "XR",
    "AI",
    "Headset",
    "Software",
    "Unity",
    "Unreal",
    "Other",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            className="border-primary-500 rounded-3xl px-4 py-1 tag"
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagsSelection;
