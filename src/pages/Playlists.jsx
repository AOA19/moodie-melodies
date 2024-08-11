import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlaylists } from "../spotifyapi";
import { moodGenres } from "../data/mood-data";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/navbar/Navbar";
import "./Playlists.css";

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
      <div className="flex justify-between">
        <Navbar />
        <Link to="/home">
          <button className="mood-change-btn text-charcoal flex items-center">
            <FaArrowLeft />
           Change Mood
          </button>
        </Link>
      </div>
      <div>
        <div className="pt-6">
          <h1 className="playlists-header text-charcoal text-3xl text-center">
            Your
            <span className="text-orchid-500 ps-2 uppercase">
              {mood || "Mood"}{" "}
            </span>
            Playlists
          </h1>
        </div>
        <div className="playlists-grid grid grid-cols-2 gap-4 px-5 py-5">
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className="playlist-img"
              />
              <p className="playlist-name text-charcoal ">{playlist.name}</p>
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
