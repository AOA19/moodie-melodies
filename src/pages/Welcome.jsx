import WelcomeBtn from "../components/buttons/WelcomeBtn";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div>
      <div>
        <img
          src="/welcome-image.svg"
          alt="Women lounging listening to music on headphones"
        />
      </div>
      <h1 className="welcome-txt text-tangerine italic text-3xl text-center">
        Welcome to
      </h1>
      <h2 className=" welcome-heading text-orchid-500 text-4xl text-center">
        moodie melodies
      </h2>
      <p className=" welcome-txt text-tangerine text-lg text-center">
        A mood-based music player that curates personalized playlists based on
        your current mood, helping you find the perfect soundtrack for any
        moment.
      </p>
      <WelcomeBtn />
    </div>
  );
}
