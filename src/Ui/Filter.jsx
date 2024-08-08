import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortValue = searchParams.get("filter") || "";

  const handleClick = () => {
    if (currentSortValue) {
      searchParams.delete("filter");
      setSearchParams(searchParams);
    } else {
      searchParams.set("filter", "veg");
      setSearchParams(searchParams);
    }
  };

  return (
    <button
      className={`rounded-md border-2 border-green-500 bg-white px-2 py-1 text-sm text-green-900 transition-all duration-200 md:py-2 ${currentSortValue ? "bg-green-800 text-white ring-1 ring-green-900 ring-offset-2" : ""}`}
      onClick={handleClick}
    >
      Pure Veg
    </button>
  );
}

export default Filter;
