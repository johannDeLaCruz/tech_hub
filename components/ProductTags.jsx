const tags = ["VR", "AR", "Headset"];

const ProductTags = () => {
  return (
    <div className="flex flex-wrap gap-1 ">
      {tags.map((tag, index) => {
        return (
          <button key={index} className="bg-black border-none text-primary-500 rounded-3xl px-4 tag">
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default ProductTags;
