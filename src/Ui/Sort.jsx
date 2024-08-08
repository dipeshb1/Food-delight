import { useSearchParams } from "react-router-dom";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortValue = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className="rounded-md bg-white px-2 py-1 text-sm shadow-md outline-none focus:outline-yellow-400 md:py-2">
      <select onChange={handleChange} value={currentSortValue}>
        <option value="rating-asc">Rating: low to high</option>
        <option value="rating-desc">Rating: high to low</option>
      </select>
    </div>
  );
}

export default Sort;
