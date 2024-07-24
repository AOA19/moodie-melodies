import "./Home.css";
import MoodIcons from "../components/buttons/MoodIcons";

export default function Home() {
  return (
    <div>
      <h1 className="home-heading text-charcoal text-3xl text-center">
        Choose Your Mood
      </h1>
      <MoodIcons/>
    </div>
  );
}
