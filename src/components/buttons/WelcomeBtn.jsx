import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function WelcomeBtn() {
  return (
    <div className="flex justify-center items-center">
      <a></a>
      <Link to="/home">
      <button className="bg-orchid-500 text-seasalt text-xl hover:bg-orchid-600 flex items-center px-7 py-3">
        Get Started <FaArrowRight />{" "}
      </button>
      </Link>
    </div>
  );
}

export default WelcomeBtn;
