import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center px-5">
      <div className="navbar-left">
        <Link to="/">
        <img src="/mm-logo.svg" alt="moodie melodies logo" className="logo" />
        </Link>
      </div>
    </nav>
  );
}
