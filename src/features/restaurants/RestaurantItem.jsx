import Rating from "../../Ui/Rating";
import LinkButton from "../../Ui/LinkButton";
import Label from "../../Ui/Label";

function RestaurantItem({ data }) {
  const { id, name, category, rating, serves } = data;

  return (
    <li className="mx-2 mt-4 flex flex-col gap-4 rounded-md bg-white px-2 py-2 shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-md font-bold md:text-xl">{name}</div>
          <Label>{serves}</Label>
        </div>
        <Rating rating={rating} />
      </div>
      <div className="flex justify-between">
        <div>{category}</div>
        <LinkButton to={`/restaurant/${id}`}>View more &rarr;</LinkButton>
      </div>
    </li>
  );
}

export default RestaurantItem;
