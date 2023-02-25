import MatchCard from "./MatchCard";

const MatchPage = () => {
  const matches = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="px-10">
      <h1 className="mb-10 font-bold text-2xl">Match Products</h1>
      <div className="flex items-center flex-wrap gap-20">
        {matches.map((match) => (
          <MatchCard key={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
