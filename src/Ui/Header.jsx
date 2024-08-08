import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();

  function handleAdd() {
    navigate("/new");
  }
  return (
    <header
      data-testid="header"
      className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 shadow-md sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <NavLink
          to="/"
          className="text-lg font-semibold uppercase tracking-wider"
        >
          Food Delight
        </NavLink>
        <div>
          <Button type="header" onClick={handleAdd}>
            Add a Restaurant
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
