function Rating({ rating }) {
  let style =
    "rounded-lg px-1.5 py-1 font-medium text-stone-50 text-sm sm:px-2 sm:text-base";

  let isRating = rating ? Number(rating) : "New";

  if (isRating >= 4 || typeof isRating === "string") {
    style = style + " bg-lime-700";
  } else if (isRating > 3 && isRating < 4) {
    style = style + " bg-yellow-500 font-bold";
  } else {
    style = style + " bg-red-800 font-bold";
  }

  return <div className={style}>{isRating}</div>;
}

export default Rating;
