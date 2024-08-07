import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import MoodIcons from "../components/buttons/MoodIcons";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="home-heading text-charcoal text-3xl text-center">
        Choose Your Mood
      </h1>
      <MoodIcons/>
    </div>
  );
}
