# Moodie Melodies 

## Overview
Moodies Melodies is a mood-based music application that utilizies the [Spotify Web API](https://developer.spotify.com/documentation/web-api) to curate Spotify playlists tailored to your current mood. Users can easily select their mood from a variety of options and instantly receive personalized playlists to match their emotional state.

## Features
 - **Mood Selection:** Choose from a range of moods like Happy, Sad, Angry and more. The selected mood determines the genre of music (pop, classical, metal, etc.) provided.

 - **Dynamic Playlists:** Upon selecting a mood, the app fetches and displays a grid of playlists that align with your current feelings.

 - **Spotify Integration:** Seamlessly integrated with the Spotify Web API to fetch and display playlists and their details and fetch genres.

## Running The Project 

1. Clone the Repository

```
git clone git@github.com:AOA19/moodie-melodies.git
```

2. Navigate to Project Directory 

```
cd moodie-melodies
```

3. Install Dependencies

```
npm install
```

4. Create a .env file in the root directory and add your Spotify API credentials:

```
VITE_SPOTIFY_CLIENT_ID=spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=spotify_client_secret
```

5. Start the Server

```
npm run dev
```

6. Open application in your preferred web browser and navigate to the local host address displayed in you terminal.


7. Build and Deploy

```
npm run build
```


## Technologies Used
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)


### Future Developments

[] Add an embeded Spotify music player so when the playlists are displayed the user can click on any of the playlists to listen right in the application
[] Randomize the playlists that are displayed. Currently the same 8 playlists are displayed for each mood
[] Figure out how to add more moods for users to choose from. Currently the application only has 5 moods because there is a limitation of how many genres (5) that can be requested from the API.
[] Switch from the [Client Credientals](https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow) authorization flow to [Authorization Code Flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow) so users can log in with their personal Spotify account. 
[] Add a favorites features when authorization flow is changed. 



