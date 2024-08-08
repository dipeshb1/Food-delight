function Label({ children }) {
  let option = children.toLowerCase();
  if (option === "veg") {
    return (
      <div className="rounded-md bg-green-300 px-1 py-1 text-xs uppercase text-green-900 sm:px-1.5">
        {children}
      </div>
    );
  }
  if (option === "non-veg") {
    return (
      <div className="rounded-md bg-red-300 px-1 py-1 text-xs uppercase text-red-900 sm:px-1.5">
        {children}
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <div className="rounded-md bg-green-300 px-1 py-1 text-xs uppercase text-green-900 sm:px-1.5">
        Veg
      </div>
      <div className="rounded-md bg-red-300 px-1 py-1 text-xs uppercase text-red-900 sm:px-1.5">
        Non-veg
      </div>
    </div>
  );
}

export default Label;
