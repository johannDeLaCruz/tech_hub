// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
