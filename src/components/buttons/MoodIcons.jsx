import { moods } from "../../data/mood-data";
import "./MoodIcons.css";

export default function MoodIcons() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 px-5 pt-9">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className="icon-bg rounded-full bg-palegreen flex flex-col justify-center items-center"
          >
            <img src={mood.src} alt={mood.alt} />
            <p className="text-center">{mood.mood}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
