import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlists/:mood" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}
