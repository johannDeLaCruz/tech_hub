import TechCard from "@components/TechCard";

const SearchResults = () => {
  const cardsList = [
    {
      name: "NexusSync SmartAssistant",
      image: "https://example.com/nexussync_smartassistant.jpg",
      price: 249.99,
      website_link: "https://www.nexussync.com",
      developer: "InnovateTech Solutions",
      rating: 4.8,
      number_of_likes: 1200,
      subscription_type: "Premium",
      brief_description:
        "Elevate your home automation with NexusSync SmartAssistant. Effortlessly manage smart devices, enhance security, and streamline your daily routines.",
      category_tags: ["Smart Home", "Automation", "IoT"],
      product_information: {
        dimensions: "6.0 x 6.0 x 1.5 inches",
        weight: "0.9 lbs",
        compatibility: "iOS, Android",
      },
      features: [
        "Voice-controlled operations",
        "Advanced security protocols",
        "Energy-efficient automation",
        "Intuitive mobile app",
      ],
      release_history: [
        { version: "1.0", date: "2023-02-15", notes: "Initial release" },
        {
          version: "2.0",
          date: "2023-07-20",
          notes: "Added voice recognition feature",
        },
      ],
      plans: [
        { name: "Basic", price: 0, features: ["Limited device support"] },
        {
          name: "Premium",
          price: 5.99,
          features: ["Unlimited devices", "24/7 support"],
        },
      ],
      social_links: {
        twitter: "https://twitter.com/nexussync",
        facebook: "https://www.facebook.com/nexussync",
      },
      video_embed:
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/nexussync_video' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      date_added: "2023-03-05",
    },
    {
      name: "QuantumView VR Glasses",
      image: "https://example.com/quantumview_vr_glasses.jpg",
      price: 499.99,
      website_link: "https://www.quantumviewtech.com",
      developer: "Futurify Technologies",
      rating: 4.5,
      number_of_likes: 900,
      subscription_type: "Pro",
      brief_description:
        "Immerse yourself in a new reality with QuantumView VR Glasses. Enjoy unparalleled virtual experiences, stunning visuals, and ergonomic design for extended use.",
      category_tags: ["Virtual Reality", "Entertainment", "Gaming"],
      product_information: {
        dimensions: "7.2 x 3.5 x 4.0 inches",
        weight: "0.6 lbs",
        compatibility: "PC, gaming consoles",
      },
      features: [
        "High-resolution OLED display",
        "Immersive 360-degree audio",
        "Comfortable ergonomic design",
        "Wide compatibility",
      ],
      release_history: [
        { version: "1.0", date: "2023-04-10", notes: "Initial release" },
        { version: "2.0", date: "2023-09-15", notes: "Enhanced audio system" },
      ],
      plans: [
        { name: "Standard", price: 0, features: ["Basic VR experiences"] },
        {
          name: "Pro",
          price: 9.99,
          features: ["Premium VR content", "Advanced controls"],
        },
      ],
      social_links: {
        twitter: "https://twitter.com/quantumviewtech",
        facebook: "https://www.facebook.com/quantumviewtech",
      },
      video_embed:
        "<iframe width='560' height='315' src='https://www.youtube.com/embed/quantumview_video' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      date_added: "2023-05-20",
    },
  ];
  return (
    <section className="container grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 py-4 justify-center">
      <TechCard />
      <TechCard />
      <TechCard />
      <TechCard />
      <TechCard />
      <TechCard />
      <TechCard />
    </section>
  );
};

export default SearchResults;
