import Breadcrumbs from "@components/Breadcrumbs";
import TechBasicInfo from "@components/TechBasicInfo";
import TechDetailedInfo from "@components/TechDetailedInfo";
import RecommendedSection from "@components/RecommendedSection";
import Image from "next/image";

const techInfoPage = () => {
  return (
    <div className="container">
      <section>
        <Breadcrumbs />
        <div className="relative overflow-hidden rounded-3xl object-cover aspect-video max-w-screen mb-4">
          <Image
            src={
              "https://images.pexels.com/photos/6037812/pexels-photo-6037812.jpeg"
            }
            alt="tech_image"
            fill={true}
            className="hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer object-cover"
          ></Image>
        </div>
        <TechBasicInfo />
        <TechDetailedInfo />
      </section>
      <RecommendedSection />
    </div>
  );
};

export default techInfoPage;
