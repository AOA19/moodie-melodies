import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./WelcomeBtn.css";

export default function WelcomeBtn() {
  return (
    <div className="flex justify-center items-center">
      <Link to="/home">
        <button className="welcome-btn bg-orchid-500 text-seasalt text-xl hover:bg-orchid-600 flex items-center px-10 py-3 rounded-full">
          Get Started <FaArrowRight className="ms-2" />{" "}
        </button>
      </Link>
    </div>
  );
}
