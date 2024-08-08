function Button({ children, onClick, disabled, type = "primary" }) {
  let base =
    "mt-3 text-sm inline-block bg-yellow-400 font-normal uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "  px-3 py-2 sm:px-4 sm:py-2.5  rounded-md",
    secondary:
      "inline-block text-sm rounded-md border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-1 ",
    submit: base + " px-3 py-1 font-medium sm:px-4 py-2  rounded-md mt-4",
    red: "rounded-xl bg-red-200 px-4 py-1 text-sm capitalize text-red-700",
    header:
      "text-sm sm:text-base bg-yellow-300 px-2 py-1 sm:px-3 hover:bg-yellow-200 transition-colors rounded-md",
    cancel:
      "px-2 text-xs sm:text-base inline-block font-semibold uppercase tracking-wide transition-colors duration-200 disabled:cursor-not-allowed",
    delete:
      "mt-3 text-sm inline-block bg-red-300 font-normal uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-red-200 focus:outline-none focus:ring focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-1 font-medium sm:px-4 py-2  rounded-md mt-4",
    edit: "absolute right-2 top-4 rounded-md bg-green-300 px-2 py-1 text-green-800 hover:bg-green-200 text-xs sm:text-base",
  };
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
