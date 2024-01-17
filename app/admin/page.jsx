"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
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
    name: "",
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
    name: {
      description: "Input the name for your item:",
      placeholder: "'Skynet Airpods'",
    },
    image: {
      description:
        "Paste the link for the image that best represents your item:",
      placeholder: "'https://images.pexels.com/photos/39853/something.jpeg'",
    },
    externalLink: {
      description: "Paste the link for the main webpage of your item:",
      placeholder: "'https://skynet.com'",
    },
    brand: {
      description: "Input the brand name of your item:",
      placeholder: "'Skynet'",
    },
    rating: {
      description: "Input your own personal rating. Only numbers from 0 to 5!",
      placeholder: "4.5",
    },
    category: {
      description: "Input the broad category your item belongs to:",
      placeholder: "'Software'",
    },
    itemDescription: {
      description:
        "Describe your item in a single sentence. This will appear in the main card:",
      placeholder: "'An advanced AI app to take over the world!'",
    },
    minimalPrice: {
      description: "Input the minimal price your item is available for:",
      placeholder: "'1.99'",
    },
    subscriptionType: {
      description: "Input the type of subscription if applicable:",
      placeholder: "'Free'",
    },
    tags: {
      description:
        "Select the tags for your items (3 is the recommended number). If no appropriate tags are available, just create a new one",
      placeholder: "Create a new tag for your items. Use only one word!",
    },
    newTag: {
      description: "Input the name of the new tag you want to create:",
      placeholder: "'Evil Robot'",
    },
    yearOfRelease: {
      description: "Input the year of release of your item:",
      placeholder: "'2023'",
    },
    socialMediaLinks: {
      description:
        "Input any relevant social media links. Only Instagram, Twitter, Facebook, Patreon and Reddit are supported:",
      placeholder: "https://www.facebook.com/skynetofficial",
    },
    videoLink: {
      description:
        "Input the link for a video that showcases your item. Only YouTube links are accepted at the moment!",
      placeholder: "'https://www.youtube.com/watch?v=ZxVwcvy4up0'",
    },
    itemDetailedInfo: {
      description:
        "Create custom slots for any additional information about your item. For example, you can add a section called: 'Release History:' 'v.0.5 - Q2 2020', 'v.1 - Q1 2021', 'v.1.5 - Q4 2020'",
      titleDescription: "Choose a name for your custom slot:",
      titlePlaceholder: "Release History",
      contentDescription: "Input any additional information:",
      contentPlaceholder:
        "2020 Q2 - Birth. 2020 Q4 - Getting Sentient. 2021 Q1 - Take over the world",
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

  const handleDeleteItemSocialMedia = (e) => {
    e.preventDefault();
    setFormData((prevState) => {
      const updatedSocialMediaLinks = [...prevState.socialMediaLinks];
      updatedSocialMediaLinks.pop();
      return {
        ...prevState,
        socialMediaLinks: updatedSocialMediaLinks,
      };
    });
  };

  const handleAddItemSocialMedia = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      socialMediaLinks: [...prevState.socialMediaLinks, ""],
    }));
  };

  const handleItemSocialMediaChange = (index, value) => {
    setFormData((prevState) => {
      const updatedSocialMediaLinks = [...prevState.socialMediaLinks];
      updatedSocialMediaLinks[index] = value;
      return {
        ...prevState,
        socialMediaLinks: updatedSocialMediaLinks,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const form = e.target;
        form.reset();
        router.push("/admin/?itemcreation=success");
      } else {
        const errorData = await response.json();        
        setError((prevState) => {
          const updatedErrorState = { ...prevState };         
          Object.keys(errorData).forEach((key) => {
            if (key in updatedErrorState) {
              updatedErrorState[key] = errorData[key] || "";
            }
          });
          return updatedErrorState;
        });
      }
    } catch (error) {
      console.error("An error creating item happened!", error);
    }
  };

  console.log(error)

  useEffect(() => {
    const handleLoadTags = async () => {
      try {
        const response = await fetch("/api/tags");
        if (!response.ok) {
          throw new Error("Failed to fetch tags");
        }
        const data = await response.json();
        const tags = data.map((obj) => obj.name);
        setTags(tags);
      } catch (error) {
        console.error("An error fetching tags happened:", error);
      }
    };
    handleLoadTags();
  }, []);

  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <section className="py-6">
          <h1 className="text-center font-heading text-h1">
            <span>Hello, </span>
            <span className="text-primary-500">Admin!</span>
          </h1>
          <h2 className="text-h3 uppercase text-center">
            Welcome to your dashboard! Fill the forms, customize, create your
            items and share them with the world!
          </h2>
        </section>
        <form
          action=""
          className="flex flex-col pb-20 gap-4 divide-y dark:divide-gray-950 divide-gray-200"
          onSubmit={handleSubmit}
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
                  <span className="text-error text-left text-danger">
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
              <span className="text-error text-left text-danger">
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
          <div className="flex flex-col gap-4 py-2">
            <span className="font-heading text-h3 text-primary-500">
              Social Media Links
            </span>
            <span className="text-body1 italic">
              {formPlaceholder.socialMediaLinks.description}
            </span>
            {formData.socialMediaLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <input
                  type="text"
                  name={`socialMedia_${index}`}
                  id={`socialMedia_${index}`}
                  placeholder={formPlaceholder.socialMediaLinks.placeholder}
                  value={formData.socialMediaLinks[index]}
                  onChange={(e) =>
                    handleItemSocialMediaChange(index, e.target.value)
                  }
                  className="w-full rounded-3xl dark:bg-gray-950 dark:border-gray-950 border text-body2 custom-hover"
                />
                {error.socialMediaLinks ? (
                  <span className="text-error text-left text-danger">
                    {error.socialMediaLinks}
                  </span>
                ) : null}
              </div>
            ))}
            <button className="btn-round" onClick={handleAddItemSocialMedia}>
              <FontAwesomeIcon icon={faPlus} className="text-primary-500" />
              Add new social media link
            </button>
            <button className="btn-round" onClick={handleDeleteItemSocialMedia}>
              <FontAwesomeIcon icon={faMinus} className="text-primary-500" />
              Delete social media link
            </button>
          </div>
          <div className="flex flex-col gap-4 py-2">
            <span className="font-heading text-h3 text-primary-500">
              Item Detailed Info
            </span>
            <span className="text-body1 italic">
              {formPlaceholder.itemDetailedInfo.description}
            </span>
            {formData.itemDetailedInfo.map(({ title, description }, index) => (
              <div
                key={index}
                className="border border-primary-500 rounded-3xl p-6 flex flex-col gap-2"
              >
                <label
                  htmlFor="itemDetailedInfo"
                  className="font-heading text-h3 text-primary-500"
                >
                  Section Title
                </label>
                <span className="text-body1 italic">
                  {formPlaceholder.itemDetailedInfo.titleDescription}
                </span>
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
                <span className="text-body1 italic">
                  {formPlaceholder.itemDetailedInfo.contentDescription}
                </span>
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
                  <span className="text-error text-left text-danger">
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
