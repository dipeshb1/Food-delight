function Stats({ data }) {
  const totalRestaurants = data.length;
  const topRated = data.filter((item) => Number(item.rating) >= 4).length;
  const vegOnly = data.filter((item) => item.serves === "veg").length;
  const vegNonVeg = data.filter(
    (item) => item.serves === "both" || item.serves === "non-veg",
  ).length;

  return (
    <div className="mx-2 mt-4 inline-block rounded-lg bg-white p-4 shadow-md md:text-lg">
      <div className="text-s mb-2 font-semibold text-gray-700">
        Total restaurants onboarded:{" "}
        <span className="text-blue-600">{totalRestaurants}</span>
      </div>
      <div className="mb-2 text-sm font-semibold text-gray-700">
        Restaurants with 4+ rating:{" "}
        <span className="text-green-600">{topRated}</span>
      </div>
      <div className="mb-2 text-sm font-semibold text-gray-700">
        Veg only restaurants:{" "}
        <span className="text-emerald-600">{vegOnly}</span>
      </div>
      <div className="text-sm font-semibold text-gray-700">
        Veg & Non-veg restaurants:{" "}
        <span className="text-orange-600">{vegNonVeg}</span>
      </div>
    </div>
  );
}

export default Stats;
