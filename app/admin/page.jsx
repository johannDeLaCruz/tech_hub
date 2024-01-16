"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { set } from "mongoose";
const AdminPage = () => {
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(["AR", "VR"]);
  const [selectedTags, setSelectedTags] = useState([]);
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
        "Describe your item in a single sentence. This will appear in the main card",
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
      placeholder: "Create a new tag for your items. Use only one word!",
    },
    newTag: {
      description: "Input the name of the new tag you want to create",
      placeholder: "'Evil Robot'",
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
        "Input any additional information about your item. For example you can add a section called: 'Release History:' 'v.0.5 - Q2 2020', 'v.1 - Q1 2021', 'v.1.5 - Q4 2020'",
      titlePlaceholder:
        "Choose a name for your new detailed information section",
      contentPlaceholder: "Input any additional information about your item",
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

  const handleAddItemDetailedInfo = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      itemDetailedInfo: [
        ...prevState.itemDetailedInfo,
        {
          title: "",
          description: "",
        },
      ],
    }));
  };
  const handleDeleteItemDetailedInfo = (e) => {
    e.preventDefault();
    setFormData((prevState) => {
      const updatedItemDetailedInfo = [...prevState.itemDetailedInfo];
      updatedItemDetailedInfo.pop();
      return {
        ...prevState,
        itemDetailedInfo: updatedItemDetailedInfo,
      };
    });
  };
  const handleItemDetailedInfoChange = (index, key, value) => {
    setFormData((prevState) => {
      const updatedItemDetailedInfo = [...prevState.itemDetailedInfo];
      updatedItemDetailedInfo[index] = {
        ...updatedItemDetailedInfo[index],
        [key]: value,
      };
      return {
        ...prevState,
        itemDetailedInfo: updatedItemDetailedInfo,
      };
    });
  };
  const handleAddNewTagChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewTag(value);
  };

  const handleAddNewTag = (e, newTag) => {
    e.preventDefault();
    const trimmedNewTag = newTag.trim();
    if (trimmedNewTag) {
      setTags((prevState) => [...prevState, trimmedNewTag]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (e, tag) => {
    e.preventDefault();
    const updatedTags = formData.tags.filter((t) => t !== tag);
    setFormData((prevState) => ({
      ...prevState,
      tags: updatedTags,
    }));
    setSelectedTags((prevState) => prevState.filter((t) => t !== tag));
    setTags((prevState) => prevState.filter((t) => t !== tag));
  };

  const handleSelectTag = (e, tag) => {
    e.preventDefault();
    setSelectedTags((prevState) => {
      let tags = [...prevState];
      if (!tags.includes(tag)) {
        tags.push(tag);
      } else {
        tags = tags.filter((t) => t !== tag);
      }
      setFormData((prevState) => ({ ...prevState, tags: tags }));
      return tags;
    });
  };

  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <form
          action=""
          className="flex flex-col py-20 gap-4 divide-y dark:divide-gray-950 divide-gray-200"
        >
          {Object.keys(formData)
            .filter(
              (key) =>
                key !== "tags" &&
                key !== "socialMediaLinks" &&
                key !== "itemDetailedInfo"
            )
            .map((item, index) => (
              <div key={index} className="flex flex-col gap-2 py-2">
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
          <div className="flex flex-col gap-2 py-2">
            <span className="font-heading text-h3 text-primary-500">Tags</span>
            <span className="text-body1 italic">
              {formPlaceholder.tags.description}
            </span>
            <div className="mx-auto w-full sm:max-w-2xl flex flex-wrap gap-2">
              {tags?.map((tag, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <button
                      onClick={(e) => handleSelectTag(e, tag)}
                      className={`border border-0 bg-gray-950 text-primary-500 rounded-3xl px-4 py-1 tag ${
                        selectedTags.includes(tag) ? "tag-selected" : ""
                      }`}
                    >
                      {tag}
                    </button>
                    <button
                      className="btn-round"
                      onClick={(e) => handleDeleteTag(e, tag)}
                    >
                      <FontAwesomeIcon icon={faMinus} className="text-danger" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label
              htmlFor={newTag}
              className="font-heading text-h3 text-primary-500"
            >
              Add new tag
            </label>
            <span className="text-body1 italic">
              {formPlaceholder.newTag.description}
            </span>
            <input
              type="text"
              name={newTag}
              id={newTag}
              placeholder={formPlaceholder.newTag.placeholder}
              value={newTag}
              onChange={handleAddNewTagChange}
              className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
            />
            {error.tags ? (
              <span className="text-error text-center text-danger">
                {error.tags}
              </span>
            ) : null}
            <button
              className="btn-round"
              onClick={(e) => handleAddNewTag(e, newTag)}
            >
              <FontAwesomeIcon icon={faPlus} className="text-primary-500" />
              Add new tag
            </button>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <span className="font-heading text-h3 text-primary-500">
              Item Detailed Info
            </span>
            <span className="text-body1 italic">
              {formPlaceholder.itemDetailedInfo.description}
            </span>
            {formData.itemDetailedInfo.map(({ title, description }, index) => (
              <div
                key={index}
                className="border border-primary-500 rounded-3xl p-4"
              >
                <label
                  htmlFor="itemDetailedInfo"
                  className="font-heading text-h3 text-primary-500"
                >
                  Section Title
                </label>
                <input
                  type="text"
                  name={`${title}`}
                  id={`${title}`}
                  placeholder={
                    formPlaceholder.itemDetailedInfo.titlePlaceholder
                  }
                  value={formData.itemDetailedInfo[index].title}
                  onChange={(e) =>
                    handleItemDetailedInfoChange(index, "title", e.target.value)
                  }
                  className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
                />
                <label
                  htmlFor="detailedInfoSectionText"
                  className="font-heading text-h3 text-primary-500"
                >
                  Section Content
                </label>
                <textarea
                  name={`${description}`}
                  id={`${description}`}
                  placeholder={
                    formPlaceholder.itemDetailedInfo.contentPlaceholder
                  }
                  cols="30"
                  rows="5"
                  value={formData.itemDetailedInfo[index].description}
                  onChange={(e) =>
                    handleItemDetailedInfoChange(
                      index,
                      "description",
                      e.target.value
                    )
                  }
                  className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
                ></textarea>
                {error.itemDetailedInfo ? (
                  <span className="text-error text-center text-danger">
                    {error.itemDetailedInfo}
                  </span>
                ) : null}
              </div>
            ))}
            <button className="btn-round" onClick={handleAddItemDetailedInfo}>
              <FontAwesomeIcon icon={faPlus} className="text-primary-500" />
              Add new info section
            </button>
            <button
              className="btn-round"
              onClick={handleDeleteItemDetailedInfo}
            >
              <FontAwesomeIcon icon={faMinus} className="text-primary-500" />
              Delete new info section
            </button>
          </div>
          <button type="submit" className="btn-primary py-2 text-white">
            Create Item!
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
