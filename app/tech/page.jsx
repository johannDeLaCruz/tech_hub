import Breadcrumbs from "@components/Breadcrumbs";
import TechBasicInfo from "@components/TechBasicInfo";
import TechImage from "@components/TechImage";
import TechDetailedInfo from "@components/TechDetailedInfo";
import RecommendedSection from "@components/RecommendedSection";

const techInfoPage = () => {
  return (
    <section>
      <Breadcrumbs />
      <TechImage />
      <TechBasicInfo />
      <TechDetailedInfo />
      <RecommendedSection />
    </section>
  );
};

export default techInfoPage;
