import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlaylists } from "../spotifyapi";
import { moodGenres } from "../data/mood-data";
import Navbar from "../components/navbar/Navbar";
import "./Playlists.css";

function changeMoodTextColor(mood) {
  switch (mood) {
    case "happy":
      return "text-tangerine";
    case "sad":
      return "text-orchid-500";
    case "angry":
      return "text-tangerine";
    case "relaxed":
      return "text-orchid-500";
    case "anxious":
      return "text-palegreen";
    default:
      return "text-orchid-500";
  }
}

export default function Playlists() {
  const { mood } = useParams();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchPlaylists() {
      const genre = moodGenres[mood];
      const playlistsData = await getPlaylists(genre);

      setPlaylists(playlistsData);
    }
    if (mood) {
      fetchPlaylists();
    }
  }, [mood]);

  return (
    <div>
      <div className="flex justify-between items-center pe-4 lg:pe-8">
        <Navbar />
        <Link to="/home">
          <button className="mood-change-btn text-charcoal flex items-center">
            Change Mood
          </button>
        </Link>
      </div>
      <div>
        <div className="pt-6">
          <h1 className="playlists-header text-charcoal ps-5 text-3xl md:text-4xl text-center xl:text-[40px]">
            Your
            <span className={`uppercase ps-2 ${changeMoodTextColor(mood)}`}>
              {mood || "Mood"}{" "}
            </span>
            Playlists
          </h1>
        </div>
        <div className="playlists-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-5 pt-10 xl:pt-16 pb-5">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="lg:m-auto">
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className="playlist-img rounded-lg "
              />
              <p className="playlist-name text-charcoal text-xl font-semibold">
                {playlist.name}
              </p>
              <p className="playlist-songs text-charcoal italic">
                {playlist.tracks.total} Songs
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
