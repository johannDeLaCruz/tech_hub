const TagsSelection = ({ selectedTags, tags, handleTagClick }) => {
  return (
    //optionally, you can use "justify-center"
    <div className="mx-auto w-full sm:max-w-2xl flex flex-wrap gap-2 pb-6">
      {tags.map((tag) => {
        return (
          <button
            key={tag._id}
            className={`border-primary-500 rounded-3xl px-4 py-1 tag ${
              selectedTags.includes(tag.name) ? "tag-selected" : ""
            }`}
            onClick={handleTagClick}
            value={tag.name}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
};

export default TagsSelection;
