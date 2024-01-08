import SearchResults from "@components/SearchResults";

const RecommendedSection = ({recommendedItems}) => {
  return (
    <div>
      <h3 className="font-heading text-heading text-center py-8">
        Explore Similar Technologies
      </h3>
      <div>
        <SearchResults />
      </div>
    </div>
  );
};

export default RecommendedSection;
