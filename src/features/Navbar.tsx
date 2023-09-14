import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-10 lg:px-8" aria-label="Global">
    <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};
