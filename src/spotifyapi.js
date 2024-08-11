import { moodGenres } from "./data/mood-data";

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let expiredTokenTime = null;

// Get access token
async function getToken() {
  if (accessToken && expiredTokenTime && new Date() < expiredTokenTime) {
    return accessToken;
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();

    accessToken = data.access_token;
    expiredTokenTime = new Date(new Date().getTime() + data.expires_in * 1000);


    return accessToken;
  } catch (error) {
    console.error("Error getting access token", error);
    return null;
  }
}

// Spotify API calls

// Get recommendations endpoint
async function getRecommendations(mood) {
  try {
    const access_token = await getToken();
    const genre = moodGenres[mood];

    const response = await fetch(
      `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_genres=${genre}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recommendations");
    }

    const data = await response.json();
    return data.tracks;
  } catch (error) {
    console.error(error);
  }
}

export { getRecommendations };

// Get catergory playlist endpoint:
async function getPlaylists(genre) {
  try {
    const access_token = await getToken();

    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=8&market=US`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch playlists");
    }

    const data = await response.json();
    return data.playlists.items;
  } catch (error) {
    console.error(error);
  }
}

export { getPlaylists };
