function Search({ setSearchKey }) {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search restaurants..."
        onChange={(e) => setSearchKey(e.target.value)}
        className="grow rounded-md px-2 py-1 text-sm shadow-md outline-none focus:outline-yellow-400 md:py-2"
      />
    </div>
  );
}

export default Search;
