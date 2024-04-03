import Filter from "../components/Filter";
import FilteredItems from "../components/FilteredItems";

const Home = () => {
  return (
    <div className="w-full flex gap-4 m-4">
      <div className="flex-1 h-full border-2 border-gray-200 rounded-lg">
        <Filter />
      </div>
      <div className="flex-[4] h-full">
        <FilteredItems />
      </div>
    </div>
  );
};

export default Home;
