import ItemImage from "@components/ItemImage";
import ItemRating from "@components/ItemRating";
import ItemTags from "@components/ItemTags";
import Link from "next/link";

const ItemCard = ({ item, handleLike, userFavorites }) => {
  const {
    _id,
    name,
    externalLink,
    // brand,
    rating,
    itemDescription,
    image,
    minimalPrice,
    subscriptionType,
    tags,
    timesFavorited,
  } = item;

  return (
    <article className="bg-gray-950 rounded-3xl overflow-hidden justify-self-center">
      <ItemImage
        minimalPrice={minimalPrice}
        image={image}
        externalLink={externalLink}
        _id={_id}
      />
      <div className="flex flex-col gap-1 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-h3">{name}</h3>
          <Link href={`${externalLink}`}>
            <svg
              className="fill-white stroke-white hover:stroke-primary-500 hover:fill-primary-500 link-hover"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </Link>
          <span className="text-caption grow text-end">{subscriptionType}</span>
        </div>
        <ItemRating rating={rating} />
        <p className="text-body1 mb-3 w-64 line-clamp-2 h-11">{itemDescription}</p>
        <div className="flex justify-between">
          <ItemTags tags={tags} />
          <div className="relative">
            <span className="absolute inset-x-0 -top-6 text-body1 text-center">
              {timesFavorited}
            </span>
            <button onClick={() => handleLike(_id)}>
              <svg
                viewBox="0 0 24 24"
                width={"2rem"}
                height={"2rem"}
                className={`stroke-primary-500 hover:fill-primary-500 ${
                  userFavorites?.some((favorite) => favorite._id === _id)
                    ? "fill-primary-500"
                    : "fill-none"
                }`}
              >
                <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
