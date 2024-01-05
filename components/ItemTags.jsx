
const ItemTags = ({ tags }) => {  
  return (
    <ul className="flex flex-wrap gap-1 ">
      {tags?.map((tag, index) => {
        return (
          <li key={index}>
            <button className="bg-gray-950 border-none text-primary-500 rounded-3xl px-4 py-1 tag">
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemTags;
