const TagsSelection = ({ activeFilters, tags, handleFilter }) => {
  return (
    //optionally, you can use "justify-center"
    <div className="mx-auto w-full sm:max-w-2xl flex flex-wrap gap-2 pb-6">
      {tags?.map((tag, index) => {
        return (
          <button
            key={index}
            className={`border border-0 bg-gray-950 text-primary-500 rounded-3xl px-4 py-1 tag ${
              activeFilters?.includes(tag)
                ? "tag-selected"
                : ""
            }`}
            onClick={() => handleFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default TagsSelection;
