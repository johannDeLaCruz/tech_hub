import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const welcomePage = () => {
  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <section className="h-screen flex flex-col justify-center">
          <h1 className="text-center font-heading text-h1">
            <span>Hello, </span>
            <span className="text-primary-500">Admin!</span>
          </h1>
          <h2 className="text-h3 uppercase text-center">
            Welcome to your dashboard! Here you can create or delete new items.
          </h2>
          <div className="flex justify-evenly p-12">
            <Link href="/admin/item/new" className="flex flex-col gap-2 group">
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                className="text-primary-500"
              />
              <span className="font-heading text-center group-hover:text-primary-500">
                ADD ITEM
              </span>
            </Link>
            <Link href="/" className="flex flex-col gap-2 group">
              <FontAwesomeIcon
                icon={faMinus}
                size="2xl"
                className="text-primary-500"
              />
              <span className="font-heading text-center group-hover:text-primary-500">
                DELETE ITEM
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default welcomePage;
