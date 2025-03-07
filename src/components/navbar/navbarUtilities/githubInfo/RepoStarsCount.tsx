import { getRepoStars } from "@/lib/actions/GetRepoStars";

const RepoStarsCount = async () => {
  const stars = await getRepoStars();
  return <p className="text-xl font-medium">{stars ? stars : " "}</p>;
};

export default RepoStarsCount;
