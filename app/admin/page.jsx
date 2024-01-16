"use client";
import TagsSelection from "@components/TagsSelection";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
    itemDetailedInfo: [
      {
        title: "",
        description: "",
      },
    ],
  });
  const [error, setError] = useState({
    title: "",
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

  const formPlaceholder = {
    title: {
      description: "Input the title for your item. Up to 25 characters!",
      placeholder: "'Skynet Airpods'",
    },
    image: {
      description:
        "Paste the link for the image that best represents your item",
      placeholder: "'https://images.pexels.com/photos/39853/something.jpeg'",
    },
    externalLink: {
      description: "Paste the link for the main webpage of your item",
      placeholder: "'https://skynet.com'",
    },
    brand: {
      description: "Input the brand name of your item",
      placeholder: "'Skynet'",
    },
    rating: {
      description: "Input your own personal rating. Only numbers from 0 to 5!",
      placeholder: "4.5",
    },
    category: {
      description: "Input the broad category your item belongs to",
      placeholder: "'Software'",
    },
    itemDescription: {
      description:
        "Describe your item in one sentence. This will appear in the main card",
      placeholder: "'An advanced AI app to take over the world!'",
    },
    minimalPrice: {
      description: "Input the minimal price your item is available for",
      placeholder: "'1.99'",
    },
    subscriptionType: {
      description: "Input the type of subscription if applicable",
      placeholder: "'Free'",
    },
    tags: {
      description:
        "Select the tags for your items. If no appropriate tags are available, create a new one",
      // placeholder:
      //   "Select the tags for your items. If no appropriate tags are available, create a new one",
    },
    yearOfRelease: {
      description: "Input the year of release of your item",
      placeholder: "'2023'",
    },
    socialMediaLinks: {
      description: "Input any social media links your item has",
      placeholder: "Input any social media links your item has",
    },
    videoLink: {
      description:
        "Input the link for a video that showcases your item. Only YouTube links are accepted at the moment!",
      placeholder: "'https://www.youtube.com/watch?v=ZxVwcvy4up0'",
    },
    itemDetailedInfo: {
      description:
        "Input any additional information about your item. For example you can add a section called: 'Release History:' 'v.0.5 - Q2 2020', 'v.1 - Q1 2021', 'v.1.5 - Q4 2020'  ",
      placeholder: "Input any additional information about your item",
    },
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const camelCaseToNormal = (text) => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (match) => match.toUpperCase());
  };

  const tags = ["AR", "VR", "XR"];

  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <form action="" className="flex flex-col py-20 gap-4">
          {Object.keys(formData)
            .filter(
              (key) =>
                key !== "tags" &&
                key !== "socialMediaLinks" &&
                key !== "itemDetailedInfo"
            )
            .map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label
                  htmlFor={item}
                  className="font-heading text-h3 text-primary-500"
                >
                  {camelCaseToNormal(item)}
                </label>
                <span className="text-body1 italic">
                  {formPlaceholder[item].description}
                </span>
                <input
                  type="text"
                  name={item}
                  id={item}
                  placeholder={formPlaceholder[item].placeholder}
                  value={formData[item]}
                  onChange={handleFormChange}
                  className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
                />
                {error[item] ? (
                  <span className="text-error text-center text-danger">
                    {error[item]}
                  </span>
                ) : null}
              </div>
            ))}
          <div>
            <span className="font-heading text-h3 text-primary-500">Tags</span>
            <span className="text-body1 italic">
              {formPlaceholder.tags.description}
            </span>
            <TagsSelection tags={tags} />
            <button className="btn-round" onClick={handleAddNewTag}>
              Add new tag
              <FontAwesomeIcon icon={faPlus} />
            </button>
            {error.tags ? (
              <span className="text-error text-center text-danger">
                {error.tags}
              </span>
            ) : null}
          </div>
          <div>
            <span className="font-heading text-h3 text-primary-500">
              Item Detailed Info
            </span>
            <span className="text-body1 italic">
              {formPlaceholder.itemDetailedInfo.description}
            </span>
            <div className="border border-primary-500 rounded-3xl p-4">
              <label
                htmlFor="detailedInfoSectionTitle"
                className="font-heading text-h3 text-primary-500"
              >
                Section Title
              </label>
              <input
                type="text"
                name="detailedInfoSectionTitle"
                id="detailedInfoSectionTitle"
                placeholder={formPlaceholder.itemDetailedInfo.description}
                // value={formData[item]}
                onChange={handleFormChange}
                className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
              />

              <label
                htmlFor="detailedInfoSectionText"
                className="font-heading text-h3 text-primary-500"
              >
                Section Content
              </label>
              <textarea
                name="detailedInfoSectionText"
                placeholder={formPlaceholder.itemDetailedInfo.placeholder}
                id="detailedInfoSectionText"
                cols="30"
                rows="5"
                className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
              ></textarea>
            </div>
            {error.tags ? (
              <span className="text-error text-center text-danger">
                {error.tags}
              </span>
            ) : null}
            <button className="btn-round" onClick={handleAddDescriptionItem}>
              Add new description item
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button type="submit" className="btn-primary py-2 text-white">
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
