import SearchResults from "@components/SearchResults";

const RecommendedSection = () => {
  return (
    <div>
      <h3 className="font-heading text-heading text-center">
        Explore Similar Technologies
      </h3>
      <div>
        <SearchResults />
      </div>
    </div>
  );
};

export default RecommendedSection;
