
const ItemTags = ({ categories }) => {  
  return (
    <ul className="flex flex-wrap gap-1 ">
      {categories?.map((tag, index) => {
        return (
          <li key={index}>
            <button className="bg-black border-none text-primary-500 rounded-3xl px-4 py-1 tag">
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemTags;
