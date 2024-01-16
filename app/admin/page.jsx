"use client";
import InputForm from "@components/InputForm";
import { useState } from "react";
const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    externalLink: "",
    brand: "",
    rating: "",
    category: "",
    itemDescription: "",
    minimalPrice: "",
    subscriptionType: "",
    tags: [],
    yearOfRelease: "",
    socialMediaLinks: [],
    videoLink: "",
    itemDetailedInfo: [],
  });
  const [error, setError] = useState({
    title: "oh no!",
    image: "",
    externalLink: "",
    brand: "",
    rating: "",
    category: "",
    itemDescription: "",
    minimalPrice: "",
    subscriptionType: "",
    tags: "",
    yearOfRelease: "",
    socialMediaLinks: "",
    videoLink: "",
    itemDetailedInfo: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(formData);

  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <form action="" className="flex flex-col py-20 gap-2">
          {Object.keys(formData)
            .filter(
              (key) =>
                key !== "tags" ||
                key !== "socialMediaLinks" ||
                key !== "itemDetailedInfo"
            )
            .map((item, index) => (
              <div key={index}>
                <InputForm
                  type={"text"}
                  placeholder={item}
                  name={item}
                  id={item}
                  value={formData[item]}
                  onChange={handleFormChange}
                />
                {error[item] ? (
                  <span className="text-error text-center text-danger">
                    {error[item]}
                  </span>
                ) : null}
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
