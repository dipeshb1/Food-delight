import { useLoaderData, useSearchParams } from "react-router-dom";
import { getRestaurants } from "../services/apiRestaurants";
import RestaurantItem from "../features/restaurants/RestaurantItem";
import Stats from "./Stats";
import { useState } from "react";
import Search from "./Search";
import Sort from "./Sort";
import Filter from "./Filter";

function Home() {
  const data = useLoaderData();
  const [searchKey, setSearchKey] = useState("");
  const [searchParams] = useSearchParams();

  const sortyBy = searchParams.get("sortBy") || "";
  const filterby = searchParams.get("filter") || "";

  let restaurants = searchKey
    ? data.filter((item) =>
        `${item.name}`
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase()),
      )
    : data;

  if (sortyBy) {
    const opt = sortyBy.split("-")[1];
    restaurants =
      opt === "asc"
        ? restaurants.sort((a, b) => Number(a.rating) - Number(b.rating))
        : restaurants.sort((a, b) => Number(b.rating) - Number(a.rating));
  }

  if (filterby) {
    restaurants = restaurants.filter((item) => item.serves === filterby);
  }

  return (
    <div className="mb-4">
      <div className="flex justify-center">
        <Stats data={data} />
      </div>
      <div className="mt-3 flex flex-col items-center gap-2 px-2 sm:flex-row">
        <div className="w-full grow md:w-0">
          <Search setSearchKey={setSearchKey} />
        </div>
        <div className="flex items-center gap-2 px-2">
          <Sort />
          <Filter />
        </div>
      </div>
      <ul>
        {restaurants.map((item) => (
          <RestaurantItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const data = await getRestaurants();
  return data;
}

export default Home;
