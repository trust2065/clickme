import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Playlists, Videos, VideosInPlaylist } from "./components/Pages";
import App from "./components/App";

function AppWithCallbackAfterRender() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="playlists/videosInPlaylist/:name" element={<VideosInPlaylist />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
