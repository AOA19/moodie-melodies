const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;

// Get access token
async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    body: { grant_type: "client_credentials" },
  });

  return await response.json();
}

// Spotify API calls

// async function 