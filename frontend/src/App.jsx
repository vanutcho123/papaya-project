import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import PapayaMusic from "./pages/PapayaMusic";
import Subscriptions from "./pages/Subscriptions";
import DefaultLayout from "./layouts/DefaultLayout";
import Library from "./pages/Library";
import History from "./pages/History";
import WatchLater from "./pages/WatchLater";
import Download from "./pages/Download";
import YourVideo from "./pages/YourVideo";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/papayamusic" element={<PapayaMusic />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/yourvideos" element={<YourVideo />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/download" element={<Download />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
