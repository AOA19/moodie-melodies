import "./Navbar.css";
// import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between items-center px-5">
      <div className="navbar-left">
        <img src="/mm-logo.svg" alt="moodie melodies logo" className="logo" />
      </div>
        {/* <button className="hamburger-menu">
          <FaBars className="text-tangerine" />
        </button> */}
    </nav>
  );
}
