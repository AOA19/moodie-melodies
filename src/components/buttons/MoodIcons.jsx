import { useNavigate } from "react-router-dom";
import { moods } from "../../data/mood-data";
import "./MoodIcons.css";

export default function MoodIcons() {
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    navigate(`/playlists/${mood}`);
  }


  return (
    <div>
      <div className="grid grid-cols-2 gap-8 px-5 pt-9 m-auto min-[500px]:grid-cols-3 md:grid-cols-5 md:mt-12 xl:w-[1000px] ">
        {moods.map((mood) => (
          <button
            key={mood.id}
            className="icon-bg rounded-full flex flex-col justify-center items-center m-auto bg-palegreen"
            onClick={() => handleMoodClick(mood.mood)}
          >
            <img src={mood.src} alt={mood.alt} className="icon-img" />
            <p className="text-center capitalize text-charcoal pt-2 icon-txt">
              {mood.mood}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
