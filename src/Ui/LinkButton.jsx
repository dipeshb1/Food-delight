import { NavLink } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <div>
      <NavLink
        to={to}
        className="mt-2 text-sm text-blue-500 transition duration-200 hover:text-blue-700 hover:underline"
      >
        {children}
      </NavLink>
    </div>
  );
}

export default LinkButton;
