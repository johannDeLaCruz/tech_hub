import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const AdminPage = () => {
  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <section className="h-screen flex flex-col justify-center">
          <h1 className="text-center font-heading text-h1">
            <span>Item</span>
            <span className="text-primary-500">Created!</span>
          </h1>
          <p className="text-h3 uppercase text-center">
            Congratulations! Your item has been created! You can see it now in
            the home page catalog!
          </p>
          <div className="flex justify-evenly p-12">
            <Link href="/" className="flex flex-col gap-2 group">
              <FontAwesomeIcon
                icon={faHome}
                size="2xl"
                className="text-primary-500"
              />
              <span className="font-heading text-center group-hover:text-primary-500">GO HOME</span>
            </Link>
            <Link href="/admin" className="flex flex-col gap-2 group">
              <FontAwesomeIcon
                icon={faTableColumns}
                size="2xl"
                className="text-primary-500"
              />
              <span className="font-heading text-center group-hover:text-primary-500">ADD ANOTHER ITEM</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
